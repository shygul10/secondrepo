"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["notifications-global"],{7102(a,b,c){c.d(b,{H:()=>f,v:()=>e});var d=c(59753);function e(){let a=document.getElementById("ajax-error-message");a&&(a.hidden=!1)}function f(){let a=document.getElementById("ajax-error-message");a&&(a.hidden=!0)}(0,d.on)("deprecatedAjaxError","[data-remote]",function(a){let b=a.detail,{error:c,text:d}=b;a.currentTarget===a.target&&"abort"!==c&&"canceled"!==c&&(/<html/.test(d)?(e(),a.stopImmediatePropagation()):setTimeout(function(){!a.defaultPrevented&&e()},0))}),(0,d.on)("deprecatedAjaxSend","[data-remote]",function(){f()}),(0,d.on)("click",".js-ajax-error-dismiss",function(){f()})},96393(a,b,c){c.d(b,{Bt:()=>h,DN:()=>k,KL:()=>n,Se:()=>j,qC:()=>o,sw:()=>l});var d=c(59753),e=c(16821),f=c(7102);function g(a,b,c){return a.dispatchEvent(new CustomEvent(b,{bubbles:!0,cancelable:c}))}function h(a,b){b&&(i(a,b),(0,e.j)(b)),g(a,"submit",!0)&&a.submit()}function i(a,b){if(!(a instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(b instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==b.type)throw TypeError("The specified element is not a submit button.");if(!a||a!==b.form)throw Error("The specified element is not owned by the form element.")}function j(a,b){if("boolean"==typeof b){if(a instanceof HTMLInputElement)a.checked=b;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===a.type)throw TypeError("checkbox can't be set to string value");a.value=b}g(a,"change",!1)}function k(a,b){for(let c in b){let d=b[c],e=a.elements.namedItem(c);e instanceof HTMLInputElement?e.value=d:e instanceof HTMLTextAreaElement&&(e.value=d)}}function l(a){if(!(a instanceof HTMLElement))return!1;let b=a.nodeName.toLowerCase(),c=(a.getAttribute("type")||"").toLowerCase();return"select"===b||"textarea"===b||"input"===b&&"submit"!==c&&"reset"!==c||a.isContentEditable}function m(a){return new URLSearchParams(a)}function n(a,b){let c=new URLSearchParams(a.search),d=m(b);for(let[e,f]of d)c.append(e,f);return c.toString()}function o(a){return m(new FormData(a)).toString()}(0,d.on)("click",".js-remote-submit-button",async function(a){let b=a.currentTarget,c=b.form;a.preventDefault();let d;try{d=await fetch(c.action,{method:c.method,body:new FormData(c),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})}catch{}d&&!d.ok&&(0,f.v)()})},16821(a,b,c){function d(a){let b=a.closest("form");if(!(b instanceof HTMLFormElement))return;let c=e(b);if(a.name){let d=a.matches("input[type=submit]")?"Submit":"",f=a.value||d;c||((c=document.createElement("input")).type="hidden",c.classList.add("js-submit-button-value"),b.prepend(c)),c.name=a.name,c.value=f}else c&&c.remove()}function e(a){let b=a.querySelector("input.js-submit-button-value");return b instanceof HTMLInputElement?b:null}c.d(b,{j:()=>d,u:()=>e})},60332(a,b,c){var d,e=c(76006),f=c(7102),g=c(96393),h=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let i=class NotificationsListSubscriptionFormElement extends HTMLElement{connectedCallback(){let a=this.querySelector(".js-label-subscriptions-load");a?.addEventListener("loadend",()=>{this.subscriptionsLabels.length>0&&(this.updateCheckedState("custom"),this.updateMenuButtonCopy("custom"))})}async submitCustomForm(a){await this.submitForm(a),this.closeMenu()}async submitForm(a){a.preventDefault(),(0,f.H)();let b=a.currentTarget,c=new FormData(b),d=await self.fetch(b.action,{method:b.method,body:c,headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json"}});if(!d.ok){(0,f.v)();return}let e=await d.json(),g=c.get("do");"string"==typeof g&&this.updateCheckedState(g),"string"==typeof g&&this.updateMenuButtonCopy(g),this.updateSocialCount(e.count),this.applyInputsCheckedPropertiesToAttributesForNextFormReset(),this.closeMenu()}updateMenuButtonCopy(a){this.unwatchButtonCopy.hidden=!("subscribed"===a||"custom"===a),this.stopIgnoringButtonCopy.hidden="ignore"!==a,this.watchButtonCopy.hidden=!("subscribed"!==a&&"custom"!==a&&"ignore"!==a)}applyInputsCheckedPropertiesToAttributesForNextFormReset(){for(let a of[...this.threadTypeCheckboxes])a.toggleAttribute("checked",a.checked)}updateCheckedState(a){for(let b of this.subscriptionButtons)b.setAttribute("aria-checked",b.value===a?"true":"false");if("custom"===a)this.customButton.setAttribute("aria-checked","true");else{for(let c of(this.customButton.setAttribute("aria-checked","false"),[...this.threadTypeCheckboxes]))(0,g.Se)(c,!1);if(void 0!==this.subscriptionsContainer){for(let d=0;d<this.subscriptionsLabels.length;d++)this.subscriptionsLabels[d].remove();void 0!==this.subscriptionsSubtitle&&this.subscriptionsSubtitle.toggleAttribute("hidden",!1),this.subscriptionsContainer.textContent=""}}}updateSocialCount(a){this.socialCount&&(this.socialCount.textContent=a,this.socialCount.setAttribute("aria-label",`${this.pluralizeUsers(a)} watching this repository`))}pluralizeUsers(a){return 1===parseInt(a)?"1 user is":`${a} users are`}handleDialogLabelToggle(a){let b=a.detail.wasChecked,c=a.detail.toggledLabelId,d=a.detail.templateLabelElementClone;if(b){for(let e=0;e<this.subscriptionsLabels.length;e++)if(this.subscriptionsLabels[e].getAttribute("data-label-id")===c){this.subscriptionsLabels[e].remove();break}}else d.removeAttribute("hidden"),d.setAttribute("data-targets","notifications-list-subscription-form.subscriptionsLabels"),this.subscriptionsContainer.appendChild(d)}openCustomDialog(a){a.preventDefault(),a.stopPropagation(),this.menu.toggleAttribute("hidden",!0),this.enableApplyButtonAndCheckbox(),this.saveCurrentLabelsState(),this.customDialog.toggleAttribute("hidden",!1),setTimeout(()=>{this.customDialog.querySelector("input[type=checkbox][autofocus]")?.focus()},0)}enableApplyButtonAndCheckbox(){let a=this.customDialog.querySelectorAll('[data-type="label"]:not([hidden])');a.length>0&&(this.customSubmit.removeAttribute("disabled"),this.threadTypeCheckboxes[0].checked=!0)}closeCustomDialog(a){a.preventDefault(),a.stopPropagation(),this.menu.toggleAttribute("hidden",!1),this.customDialog.toggleAttribute("hidden",!0),setTimeout(()=>{this.customButton.focus()},0)}resetFilterLabelsDialog(a){a.preventDefault(),a.stopPropagation();for(let b=0;b<this.subscriptionsLabels.length;b++){let c=this.subscriptionsLabels[b].getAttribute("data-label-id");for(let d=0;d<this.dialogLabelItems.length;d++)if(this.dialogLabelItems[d].labelId===c){this.dialogLabelItems[d].setCheckedForDropdownLabel(!1);break}}for(let e=0;e<Object.keys(this.lastAppliedLabels).length;e++){let f=Object.keys(this.lastAppliedLabels)[e];for(let g=0;g<this.dialogLabelItems.length;g++)if(this.dialogLabelItems[g].labelId===f){this.dialogLabelItems[g].setCheckedForDropdownLabel(!0);break}}this.subscriptionsContainer.replaceChildren(...Object.values(this.lastAppliedLabels)),this.closeFilterLabelsDialog(a)}openFilterLabelsDialog(a){a.preventDefault(),a.stopPropagation(),this.saveCurrentLabelsState(),this.customDialog.toggleAttribute("hidden",!0),this.filterLabelsDialog.toggleAttribute("hidden",!1),setTimeout(()=>{this.filterLabelsDialog.querySelector("input[type=checkbox][autofocus]")?.focus()},0)}closeFilterLabelsDialog(a){a.preventDefault(),a.stopPropagation(),this.menu.toggleAttribute("hidden",!0),this.customDialog.toggleAttribute("hidden",!1),this.filterLabelsDialog.toggleAttribute("hidden",!0)}applyFilterLabelsDialog(a){a.preventDefault(),a.stopPropagation(),this.saveCurrentLabelsState(),this.hideFilterSubtitle(),this.enableIssuesCheckbox(),this.closeFilterLabelsDialog(a)}enableIssuesCheckbox(){let a=Object.keys(this.lastAppliedLabels).length>0;a&&this.threadTypeCheckboxes.length>0&&(this.threadTypeCheckboxes[0].checked=a),this.threadTypeCheckboxesUpdated()}hideFilterSubtitle(){let a=Object.keys(this.lastAppliedLabels).length>0;this.subscriptionsSubtitle.toggleAttribute("hidden",a)}saveCurrentLabelsState(){this.lastAppliedLabels={},this.labelInputs.textContent="";for(let a=0;a<this.subscriptionsLabels.length;a++){let b=this.subscriptionsLabels[a].getAttribute("data-label-id");b&&(this.lastAppliedLabels[b]=this.subscriptionsLabels[a].cloneNode(!0),this.appendLabelToFormInput(b))}}appendLabelToFormInput(a){let b=document.createElement("input");b.setAttribute("type","hidden"),b.setAttribute("name","labels[]"),b.setAttribute("value",a),this.labelInputs.appendChild(b)}detailsToggled(){this.menu.toggleAttribute("hidden",!1),this.customDialog.toggleAttribute("hidden",!0)}submitCustom(a){a.preventDefault(),this.details.toggleAttribute("open",!1)}threadTypeCheckboxesUpdated(){let a=!this.threadTypeCheckboxes.some(a=>a.checked);this.customSubmit.disabled=a}closeMenu(){this.details.toggleAttribute("open",!1)}constructor(...a){super(...a),this.lastAppliedLabels={}}};h([e.fA],i.prototype,"details",void 0),h([e.fA],i.prototype,"menu",void 0),h([e.fA],i.prototype,"customButton",void 0),h([e.fA],i.prototype,"customDialog",void 0),h([e.fA],i.prototype,"filterLabelsDialog",void 0),h([e.GO],i.prototype,"subscriptionButtons",void 0),h([e.GO],i.prototype,"subscriptionsLabels",void 0),h([e.fA],i.prototype,"labelInputs",void 0),h([e.fA],i.prototype,"subscriptionsSubtitle",void 0),h([e.fA],i.prototype,"socialCount",void 0),h([e.fA],i.prototype,"unwatchButtonCopy",void 0),h([e.fA],i.prototype,"stopIgnoringButtonCopy",void 0),h([e.fA],i.prototype,"watchButtonCopy",void 0),h([e.GO],i.prototype,"threadTypeCheckboxes",void 0),h([e.fA],i.prototype,"customSubmit",void 0),h([e.fA],i.prototype,"subscriptionsContainer",void 0),h([e.GO],i.prototype,"dialogLabelItems",void 0),i=h([e.Ih],i);var j=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let k=class NotificationsTeamSubscriptionFormElement extends HTMLElement{closeMenu(){this.details.toggleAttribute("open",!1)}};j([e.fA],k.prototype,"details",void 0),k=j([e.Ih],k);var l=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let m=((d=class NotificationsDialogLabelItemElement extends HTMLElement{toggleDropdownLabel(a){if(a.preventDefault(),a.stopPropagation(),this.label){let b="true"===this.label.getAttribute("aria-checked");this.setCheckedForDropdownLabel(!b),this.dispatchEvent(new CustomEvent("notifications-dialog-label-toggled",{detail:{wasChecked:b,toggledLabelId:this.labelId,templateLabelElementClone:this.hiddenLabelTemplate.cloneNode(!0)},bubbles:!0}))}}setCheckedForDropdownLabel(a){this.label.setAttribute("aria-checked",a.toString())}}).attrPrefix="",d);l([e.fA],m.prototype,"label",void 0),l([e.fA],m.prototype,"hiddenLabelTemplate",void 0),l([e.fA],m.prototype,"hiddenCheckboxInput",void 0),l([e.Lj],m.prototype,"labelId",void 0),m=l([e.Ih],m)}},a=>{var b=b=>a(a.s=b);a.O(0,["vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-06ff531"],()=>b(60332));var c=a.O()}])
//# sourceMappingURL=notifications-global-82534751c8f4.js.map