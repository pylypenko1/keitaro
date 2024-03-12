Calendar.setup=function(e){function t(t,a){void 0===e[t]&&(e[t]=a)}t("inputField",null),t("displayArea",null),t("button",null),t("eventName","click"),t("ifFormat","%Y/%m/%d"),t("daFormat","%Y/%m/%d"),t("singleClick",!0),t("disableFunc",null),t("dateStatusFunc",e.disableFunc),t("dateTooltipFunc",null),t("dateText",null),t("firstDay",null),t("align","Br"),t("range",[1900,2999]),t("weekNumbers",!0),t("flat",null),t("flatCallback",null),t("onSelect",null),t("onClose",null),t("onUpdate",null),t("date",null),t("showsTime",!1),t("timeFormat","24"),t("electric",!0),t("step",2),t("position",null),t("cache",!1),t("showOthers",!1),t("multiple",null);var a=["inputField","displayArea","button"];for(var l in a)"string"==typeof e[a[l]]&&(e[a[l]]=document.getElementById(e[a[l]]));if(!(e.flat||e.multiple||e.inputField||e.displayArea||e.button))return alert("Calendar.setup:\n  Nothing to setup (no fields found).  Please check your code"),!1;function n(e){var t=e.params,a=e.dateClicked||t.electric;a&&t.inputField&&(t.inputField.value=e.date.print(t.ifFormat),"function"==typeof t.inputField.onchange&&t.inputField.onchange()),a&&t.displayArea&&(t.displayArea.innerHTML=e.date.print(t.daFormat)),a&&"function"==typeof t.onUpdate&&t.onUpdate(e),a&&t.flat&&"function"==typeof t.flatCallback&&t.flatCallback(e),a&&t.singleClick&&e.dateClicked&&e.callCloseHandler()}if(null!=e.flat){if("string"==typeof e.flat&&(e.flat=document.getElementById(e.flat)),!e.flat)return alert("Calendar.setup:\n  Flat specified but can't find parent."),!1;var i=new Calendar(e.firstDay,e.date,e.onSelect||n);return i.setDateToolTipHandler(e.dateTooltipFunc),i.showsOtherMonths=e.showOthers,i.showsTime=e.showsTime,i.time24="24"==e.timeFormat,i.params=e,i.weekNumbers=e.weekNumbers,i.setRange(e.range[0],e.range[1]),i.setDateStatusHandler(e.dateStatusFunc),i.getDateText=e.dateText,e.ifFormat&&i.setDateFormat(e.ifFormat),e.inputField&&"string"==typeof e.inputField.value&&i.parseDate(e.inputField.value),i.create(e.flat),i.show(),!1}return(e.button||e.displayArea||e.inputField)["on"+e.eventName]=function(){var t=e.inputField||e.displayArea,a=e.inputField?e.ifFormat:e.daFormat,l=!1,i=window.calendar;if(t&&(e.date=Date.parseDate(t.value||t.innerHTML,a)),i&&e.cache?(e.date&&i.setDate(e.date),i.hide()):(window.calendar=i=new Calendar(e.firstDay,e.date,e.onSelect||n,e.onClose||function(e){e.hide()}),i.setDateToolTipHandler(e.dateTooltipFunc),i.showsTime=e.showsTime,i.time24="24"==e.timeFormat,i.weekNumbers=e.weekNumbers,l=!0),e.multiple){i.multiple={};for(var r=e.multiple.length;--r>=0;){var o=e.multiple[r],u=o.print("%Y%m%d");i.multiple[u]=o}}return i.showsOtherMonths=e.showOthers,i.yearStep=e.step,i.setRange(e.range[0],e.range[1]),i.params=e,i.setDateStatusHandler(e.dateStatusFunc),i.getDateText=e.dateText,i.setDateFormat(a),l&&i.create(),i.refresh(),e.position?i.showAt(e.position[0],e.position[1]):i.showAtElement(e.button||e.displayArea||e.inputField,e.align),!1},i};