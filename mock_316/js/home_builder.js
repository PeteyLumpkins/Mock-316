// Builds the heading 
function build_heading(heading_text, page_name) {

    // Creates container for heading text 
    // <div id="page_name + _heading_container" class=page_name + " heading container">...</div>
    var heading_container = document.createElement("div");
    heading_container.id = page_name.toLowerCase() + "_heading_container";
    heading_container.classList = [page_name + " heading container"];
    
    heading_container.append(heading_text);

    return heading_container;
}

// Builds a descirption for the page
function build_description(description_text, page_name) {
    var description_container = document.createElement("div");
    description_container.id = page_name.toLowerCase() + "_description";
    description_container.classList = [page_name + " description container"];

    description_container.appendChild(build_paragraph(description_text));

    return description_container;
}

// Builds a paragraph with the given content
function build_paragraph(content) {
    var paragraph = document.createElement("p");
    paragraph.append(content);
    return paragraph;
}

export {build_heading, build_description, build_paragraph}
