import $ from "jquery";

$('h1').text('webpack Basics');

export function countWords(string) {
    return string.split(" ").length;
}