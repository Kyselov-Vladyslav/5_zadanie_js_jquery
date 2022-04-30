"use strict";

const user_surname = ["Kania", "Nowak", "Kowalska", "Maszczykowska"];
const user_name = ["Piotr", "Adam", "Anna", "Monika"];
document.querySelector("table").className = "table table-striped";
document.querySelector("thead").className = "thead-dark";
let out = "";
  for (let i = 0; i < user_surname.length; i++) {
    out += `<tr>`;
    out += `<th scope="row">${i+1}</th>`;
    out += `<td>${user_surname[i]}</td>`;
    out += `<td>${user_name[i]}</td>`;
    out += `</tr>`;
  $("tbody").html(out);
}
