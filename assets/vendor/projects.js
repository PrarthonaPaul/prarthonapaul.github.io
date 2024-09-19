const projects = [
    {
        title: "Scope Attribute",
        image: "/assets/img/computer-vision-v2-04.png",
        description: "A feature to add additional scopes to OIDC config for WildFly.",
        accomplishments: [
            "Added a feature to WildFly and WildFly-Elytron to add additional scopes to OIDC config."
        ],
        liveLink: "https://docs.wildfly.org/33/Admin_Guide.html#scope-configuration",
        githubLink: "https://github.com/wildfly/wildfly/pull/17790", 
        date: "2024-03-31"
    },
    {
        title: "Map Application Project",
        image: "/assets/img/project-music-player.png",
        description: "A C++ application to display maps of different cities and navigate to various destinations.",
        accomplishments: [
            "C++, HTML, CSS, GUI tools.",
            "Open maps of various cities and browse around, zooming in and out.",
            "Search any intersections within the city.",
            "Navigate to and from any two points within the city.",
            "Find landmarks in a given area (parks, coffee shops, museums)."
        ],
        liveLink: "https://prarthonapaul.github.io/Mapper_Instructions/",
        githubLink: "https://github.com/PrarthonaPaul/Mapper-65", 
        date: "2022-04-25"
    },
    {
        title: "JWT Requests",
        image: "/assets/img/project-quizup-logo-1.png",
        description: "A feature to send request objects as JWTs when securing an application with OIDC.",
        accomplishments: [
            "Added a feature to WildFly and WildFly-Elytron to send request objects as a Json Web Token when securing a WildFly application with OpenID connect (OIDC).",
            "Allow users to sign and encrypt request objects using various algorithms supported by the OIDC provider.",
            "Allow users to use symmetric and asymmetric algorithms and add corresponding key pairs as needed."
        ],
        liveLink: "https://docs.wildfly.org/33/Admin_Guide.html#sending-a-request-object-as-a-jwt",
        githubLink: "https://github.com/wildfly/wildfly/pull/17219", 
        date: "2024-06-30"
    }
];

let currentProjectIndex = 0; // To track the current index of displayed projects
// Sort projects by date (most recent first)
projects.sort((a, b) => new Date(b.date) - new Date(a.date));

// Function to create project HTML
function createProjectHTML(project) {
    return `
        <div class="col s12 m6 l4">
            <div class="card medium">
                <div class="card-image waves-effect waves-block waves-light">
                    <img alt="${project.title}" src="${project.image}" style="height: 100%; width: 100%" class="activator" />
                </div>
                <div class="card-content">
                    <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
                    <p>${project.description}</p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
                    <ul>${project.accomplishments.map(item => `<li>${item}</li>`).join('')}</ul>
                    <div class="card-action">
                        ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey"><i class="fa fa-external-link"></i></a>` : ""}
                        ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey"><i class="fa fa-github"></i></a>` : ""}
                    </div>
                </div>
            </div>
        </div>`;
}

// Function to load the next project
function loadNextProject() {
    const recentProjectsContainer = document.getElementById('recent-projects-container');
    
    // Check if there are more projects to display
    if (currentProjectIndex < projects.length) {
        const projectHTML = createProjectHTML(projects[currentProjectIndex]);
        recentProjectsContainer.innerHTML += projectHTML; // Add project HTML to the container
        currentProjectIndex++; // Increment index for next project
    }

    // Hide the "Load More" button if no more projects
    if (currentProjectIndex >= projects.length) {
        document.getElementById('load-more').style.display = 'none';
    }
}

// Initially load the first project
loadNextProject();

// Event listener for the "Load More" button
document.getElementById('load-more').addEventListener('click', loadNextProject);
