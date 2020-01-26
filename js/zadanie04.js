const sampleClassElements = document.querySelectorAll(".sample_class");

function getTagsOfElement(element) {
    const tagNamesArr = []
    element.forEach( item => {
        tagNamesArr.push(item.tagName)
    })

    return tagNamesArr;
}

 getTagsOfElement(sampleClassElements);

const sampleIdElement = document.querySelector("#sample_id")

function getClassesOfElement(element) {

    const classNamesArr = [];

    classNamesArr.push(element.getAttribute("class"));

    return classNamesArr;
}

console.log(getClassesOfElement(sampleIdElement));


const sampleTwoClassElementsLi = document.querySelectorAll(".sample_class_2 li");

function getInnerTextsOfElements(elements) {
    const txtElementsArr = []
    elements.forEach( item => txtElementsArr.push(item.innerText))
    return txtElementsArr;
}

getInnerTextsOfElements(sampleTwoClassElementsLi);

const allAnchor = document.querySelectorAll("a");

function getAddressesOfElements(elements) {
    const hrefAnchorArr = [];

    allAnchor.forEach( item => item.getAttribute("href") ? hrefAnchorArr.push(item.getAttribute("href")) : "")

    return hrefAnchorArr;
}

getAddressesOfElements(allAnchor);

const allSampleClassThree = document.querySelectorAll(".sample_class_3");

getTagsOfElement(allSampleClassThree);