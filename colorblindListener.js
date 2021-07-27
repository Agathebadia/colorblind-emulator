window.selectedFilter = null;

// window.onload = function() {
//   if (!chrome || !chrome.storage || !chrome.storage.local) return;
//   chrome.storage.local.get(["key"], function(result) {
//     try {
//       document.getElementById(result.key).click();
//     } catch (e) {
//       console.log(e);
//     }
//   });
// };
const key = 'myKey';
const value = { name: 'my value' };

chrome.storage.local.set({key: value}, () => {
  if (chrome.runtime.lastError)
        console.log('Error setting');

  console.log('Stored name: ' + value.name);
});

const key = 'myKey';
chrome.storage.local.get([key], (result) => {
  if (chrome.runtime.lastError)
        console.log('Error getting');

  console.log('Retrieved name: ' + result.myKey.name);
});

chrome.storage.local.clear(() => {
    console.log('Everything was removed');
});
/**
 * Sets the selected filter in storage
//  * param {String} value the selected input
 */

// function setSelected(value) {
//   try {
//     chrome.storage.local.set({ key: value }, function() {
//       document.getElementById(value).checked = true;
//     });
//   } catch {}
// }

// function injectFilter(fileName) {
//   chrome.tabs.executeScript({ file: fileName });
// }

// document.querySelectorAll(['[id^="radio"]']).forEach(radioButton => {
//   const filter = radioButton.parentElement.id.replace("option-", "");
//   radioButton.addEventListener("click", function() {
//     // page-specific filters
//     setSelected(radioButton.id);
//     injectFilter(`filters/${filter}.js`);
//     // popup-specific filters
//     // applyFilter((window.selectedFilter = filter));
//   });
// });
