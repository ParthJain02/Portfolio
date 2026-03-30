export async function GET() {
  try {
    const username = "ParthJain02";

    const response = await fetch(`https://api.github.com/users/${username}/repos?type=public&sort=updated&per_page=20`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();

    // Transform GitHub repos to match our project structure
    const projects = repos
      .filter((repo: any) => !repo.fork) // Only original repos (remove fork filter to show more)
      .slice(0, 6) // Limit to 6 projects
      .map((repo: any, index: number) => ({
        id: index + 1,
        title: repo.name.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()),
        des: repo.description || repo.topics?.join(", ") || "A GitHub project",
        img: "/bg.png",
        iconLists: getLanguageIcons(repo.language),
        link: repo.homepage || repo.html_url,
        sourceCode: repo.html_url,
      }));

    console.log(`Fetched ${projects.length} projects for ${username}`);
    return Response.json(projects);
  } catch (error) {
    console.error("GitHub API error:", error);
    return Response.json([], { status: 500 });
  }
}

function getLanguageIcons(language: string): string[] {
  const languageMap: { [key: string]: string } = {
    JavaScript: "/re.svg",
    TypeScript: "/brandtypescript.svg",
    Python: "/b4.svg",
    Java: "/java.svg",
    PHP: "/php.svg",
    HTML: "/re.svg",
    CSS: "/tail.svg",
    "C#": "/c.svg",
    Go: "/c.svg",
    Kotlin: "/kotlin.svg",
  };

  if (!language) return ["/code.svg"];
  return [languageMap[language] || "/c.svg"];
}
