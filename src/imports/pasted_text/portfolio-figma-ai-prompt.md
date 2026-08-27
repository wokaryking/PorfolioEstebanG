Portfolio Update - Figma AI Prompt
Use the uploaded portfolio design as the base reference.
DO NOT redesign the interface.
Maintain the current design language including:
	• Dark theme
	• Yellow/Gold accent color
	• Typography
	• Sidebar
	• Border radius
	• Components
	• Spacing
	• Shadows
	• Overall aesthetic
The objective is to improve the project system, interactions and prepare the design so it can later be exported into clean HTML, CSS and JavaScript.

IMPORTANT
Everything must be designed thinking about future code implementation.
The generated code should be semantic, reusable and scalable.
Avoid placeholder divs whenever there is a semantic HTML element available.
The objective is that later I only replace:
	• image urls
	• youtube links
	• sketchfab embeds
	• website links
	• video urls
without changing the HTML structure.

PROJECT CARDS
Every project card must have exactly the same size.
No project can become taller or wider than another.
The media area must have a fixed landscape aspect ratio.
Recommended:
16:9
Never square.
Example structure:
<article class="project-card">
<imgsrc="/assets/projects/project-cover.webp"alt="Project Cover">
<h3>Project Name</h3>
<p>Category</p>
</article>
The image must always be an actual HTML img tag.
Never use CSS background-image.
Never use a placeholder div.
Images must automatically adapt to the parent container.
Equivalent CSS:
.project-cover{
width:100%;
aspect-ratio:16/9;
overflow:hidden;
}
.project-cover img{
width:100%;
height:100%;
object-fit:cover;
display:block;
}
The image must completely fill the container.
Never stretch.
Never overflow.
Never become square.
Always keep the same visual rhythm.

COLLAPSE MODE
Keep the current design.
Collapse only shows one featured project.
If the featured project is
La Cosina de Jeremy
the cover image must be exactly the same image used in Explore mode.
Do not duplicate project information.
Both cards should reference the same project.

EXPLORE MODE
When Explore is pressed
expand smoothly.
Display every project.
When Collapse is pressed
return to only the featured project.
Use Smart Animate.

WEBSITE PROJECTS
The featured project is
La Cosina de Jeremy
Website
https://la-cosina-de-jeremy.netlify.app/
Use the uploaded cover image for this project.
Do not generate another placeholder image.
The project page should contain
Large cover image
Description
Technologies
Visit Website button
The button opens
https://la-cosina-de-jeremy.netlify.app/
The website URL should be very easy to replace later.

WEBSITE PROJECT STRUCTURE
The preview image must always be
<img src="cover.webp">
Never use a div.

VIDEO PROJECTS
The cover image must always be
<img>
not a div.
When opening the project
display either
HTML5 video
or
YouTube iframe
depending on the project.
One project should use
https://youtu.be/lSbosJIcbpg
as its example video.

AUTOMATIC YOUTUBE PROJECT
One project card must always be dynamic.
Use my channel
https://www.youtube.com/@EstebanGuzman-24
Automatically retrieve
Newest upload
Thumbnail
Title
Date
Video URL
Assign the yellow
NEW
badge to this project.
When I upload another video
the newest video automatically becomes NEW.
The previous NEW project becomes a normal project.
No manual editing required.
The remaining video cards remain available.
The gallery should continue growing over time.

3D PROJECTS
Use the uploaded cover images.
The project cards always use
<img>
as their cover.
When opening the project
display a Sketchfab embed.
The iframe should automatically fill the media container.

AUTOMATIC SKETCHFAB PROJECT
One project card should automatically retrieve the latest model from
https://sketchfab.com/wokary
Automatically update
Title
Thumbnail
Link
Embed
Publication date
Assign the NEW badge to this newest project.
When another model is uploaded
the new model becomes NEW.
The previous NEW project becomes a normal project.
The gallery keeps growing.

ADDITIONAL 3D PROJECT
Create another project named
Dragon
When opening it
use the Sketchfab embed supplied below.
Leave the embed area ready so I can replace it later simply by replacing the iframe code.

PROJECT DETAIL PAGE
When clicking a project
Open the visualization page.
Display
Large media
Project title
Theme
Description
Goals
Achievements
Tools Used
The description area should scroll independently if the content becomes long.
The page height should never increase.

TOOLS USED
Display technology badges according to the project category.
Examples
Web
HTML
CSS
JavaScript
React
Bootstrap
Tailwind
Figma
Firebase
GitHub

Video
Premiere Pro
After Effects
Photoshop
Illustrator
Audition
Media Encoder

3D
Maya
Substance Painter
Photoshop
Illustrator
Blender
ZBrush
Cinema 4D

NAVIGATION FLOW
Projects
↓
Collapse
↓
Explore
↓
Visualize
↓
View Project
↓
Project Details
↓
Back to Description
↓
Back to Projects

COMPONENTS
Create reusable components for
Buttons
Cards
Project Covers
Tool Badges
Navigation
Category Headers
Project Details
Media Containers
NEW Badge
Everything must use Auto Layout.

README PAGE
Create a page called
README
This page will serve as a design system and resource library.
Include
	• Button variants
	• Badge variants
	• Icon library
	• Category colors
	• Typography
	• Project templates
	• Card templates
	• Description templates
	• Technology badge templates
	• Media templates (Image, Video, Website, Sketchfab)
	• Instructions indicating where to replace image URLs, website URLs, YouTube URLs and Sketchfab embed codes without modifying the HTML structure.

FINAL OBJECTIVE
Build this portfolio as if it were a real production-ready application.
The system should be scalable, reusable and dynamic.
Adding a new project should only require replacing one of the following:
	• an image URL,
	• a website URL,
	• a YouTube URL,
	• a Google Drive video URL,
	• or a Sketchfab embed code.
No redesign of the interface or modification of the HTML structure should be necessary when new projects are added. The layout, interactions, and component system must remain consistent as the portfolio grows.

