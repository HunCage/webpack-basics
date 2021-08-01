import $ from "jquery";

$('h1').text('Webpack Basics');

export function countWords(string) {
    return string.split(" ").length;
}