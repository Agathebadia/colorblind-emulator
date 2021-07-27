// let color = '#3aa757';
let key = 'myKey';
let value = { name: 'my value' };

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.local.set({key: value});
//   console.log('Stored name:' + value.name);
//   chrome.storage.local.get([key], (result) => {
//     if (chrome.runtime.lastError)
//         console.log('Error getting');

//     console.log('Retrieved name: ' + result.myKey.name);
// });
// });

chrome.storage.sync.set({key: value}, function() {
  console.log('Value is set to ' + key[value]);
});

chrome.storage.sync.get(['key'], function(result) {
  console.log('Value currently is ' + result.key);
});


chrome.runtime.onInstalled.addListener(function (changes, namespace) {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    console.log(
      `Storage key "${key}" in namespace "${namespace}" changed.`,
      `Old value was "${oldValue}", new value is "${newValue}".`
    );
  }
});
