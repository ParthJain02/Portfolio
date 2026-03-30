export async function GET() {
  try {
    const username = "ParthJain02";

    const response = await fetch(`https://api.github.com/users/${username}/repos?type=public&sort=updated&per_page=10`, {
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
      .filter((repo: any) => !repo.fork && repo.description) // Only original repos with descriptions
      .slice(0, 6) // Limit to 6 projects
      .map((repo: any, index: number) => ({
        id: index + 1,
        title: repo.name.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()),
        des: repo.description || "A GitHub project",
        img: "/bg.png",
        iconLists: getLanguageIcons(repo.language),
        link: repo.homepage || repo.html_url,
        sourceCode: repo.html_url,
      }));

    return Response.json(projects);
  } catch (error) {
    console.error("GitHub API error:", error);
    return Response.json([], { status: 500 });
  }
}

function getLanguageIcons(language: string): string[] {
  const languageMap: { [key: string]: string } = {
    JavaScript: "/js.svg",
    TypeScript: "/brandtypescript.svg",
    Python: "/python.svg",
    Java: "/java.svg",
    PHP: "/php.svg",
    HTML: "/html.svg",
    CSS: "/css.svg",
    React: "/react.svg",
    "Next.js": "/nextjs.svg",
  };

  if (!language) return ["/code.svg"];
  return [languageMap[language] || "/code.svg"];
}
