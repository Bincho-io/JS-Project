"use strict";
{
  const result = document.getElementById("result");
  let gender = "";

  document.getElementById("btn").addEventListener("click", () => {

    document.querySelectorAll("[name = 'gender']").forEach((e) => {
      if (e.checked === true) {
        gender = e.value;
      }
    });

    const hobby = [];
    document.querySelectorAll("[name = 'hobby']").forEach((e) => {
      if (e.checked === true) {
        hobby.push(e.value);
      }
    });

    const itemFullName = document.createElement("p");
    itemFullName.textContent = `Full Name: ${document.getElementById("fullName").value}`;
    result.append(itemFullName);

    const itemComment = document.createElement("p");
    itemComment.textContent = `Comment: ${document.getElementById("txtArea").value}`;
    result.append(itemComment);

    const itemFruit = document.createElement("p");
    itemFruit.textContent = `Fruit: ${document.getElementById("select").value}`;
    result.append(itemFruit);

    const itemGender = document.createElement("p");
    itemGender.textContent = `Gender: ${gender}`;
    result.append(itemGender);

    const itemHobby = document.createElement("p");
    itemHobby.textContent = `Hobby: ${hobby.join(", ")}`;
    result.append(itemHobby);

    const itemDate = document.createElement("p");
    itemDate.textContent = `Date: ${document.getElementById("date").value}`;
    result.append(itemDate);

    const itemRange = document.createElement("p");
    itemRange.textContent = `Range: ${document.getElementById("range").value}`;
    result.append(itemRange);

    const itemColor = document.createElement("p");
    itemColor.textContent = `Color: ${document.getElementById("color").value}`;
    result.append(itemColor);

  });
}