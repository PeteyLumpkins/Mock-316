import {build_heading, build_description} from "./home_builder.js";
import {build_schedule_table} from "./schedule_builder.js";

// Builds the home page for the website from my_data.json file
export function build_home_page(data_path) {
    let my_json = $.getJSON(data_path, (json) => {
        add_item("body", build_navbar(json.navbar));
        add_item("body", build_heading(json.home.heading, "home"));
        add_item("body", build_description(json.home.description, "home"));
        add_item("#home_description");
        add_item("body", build_footer());
    });
}

export function build_schdule_page(data_path) {
    let my_json = $.getJSON(data_path, (json) => {
        add_item("body", build_navbar(json.navbar));
        add_item("body", build_heading(json.home.heading, "home"));
        add_item("body", build_schedule_table(json['schedule']));
        add_item("body", build_footer());
    })
}

/**
 * Adds the given item to the specified location in the DOM tree
 * 
 * @param {*} location - where the item should go in the body of the DOM tree
 * @param {*} item - the item to add to the location in the DOM tree
 */
function add_item(location, item) {
    $(location).append(item);
}

// Builds a navbar for the page
function build_navbar(data) {
    let navbar = document.createElement("div");
    navbar.id = "navbar";
    navbar.classList = ["nav container"];
    
    for (let i = 0; i < data.length; i++) {
        navbar.append(build_navbar_link(data[i].name, data[i].link));
    }

    return navbar;
}

// Builds the links for the navbar
function build_navbar_link(name, link) {
    let link_tag = document.createElement("a");

    link_tag.id = "navbar_" + name.toLowerCase();
    link_tag.classList = ["nav option"]
    link_tag.href = link;
    link_tag.append(name)

    return link_tag;
}

// Builds the footer of each page
function build_footer() {
    let footer = document.createElement("div");
    let hline = document.createElement("hr");
    let space = document.createElement("br");


    footer.classList = ["footer container"];
    footer.append(hline);
    footer.append(space);
    
    footer.append(build_image("../images/cse_logo.jpeg", "home_cse_logo"));
    footer.append(build_image("../images/seawolf_logo.png", "home_seawolf_logo"))

    return footer;
}

// Builds an image
function build_image(image_url, id) {
    let image = document.createElement("img");
    image.src = image_url;
    image.id = id;

    return image;
}



