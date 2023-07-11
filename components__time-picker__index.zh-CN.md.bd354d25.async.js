"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1176],{631126:function(p,o,n){n.r(o);var _=n(502143),Z=n(968521),g=n(720719),v=n(28840),c=n(759907),l=n(828089),k=n(825673),b=n(902068),h=n(574399),f=n(863942),P=n(316073),x=n(24628),y=n(719260),T=n(956140),a=n(127179),s=n(905388),E=n(233675),D=n(606965),w=n(268696),j=n(587302),r=n(424128),O=n(249706),C=n(795127),A=n(116846),M=n(73024),i=n(606641),d=n(667294),e=n(370917);function u(){var m=(0,i.eL)(),t=m.texts;return(0,e.tZ)(i.dY,null,(0,e.tZ)(d.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,t[0].value),(0,e.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,e.tZ)("p",null,t[1].value),(0,e.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,e.tZ)(s.Z,{items:[{demo:{id:"components-time-picker-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/time-picker/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0-2","rc-input":"~1.1.0","rc-input-number":"~8.0.0","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
);
export default App;
`,description:"<p>\u70B9\u51FB TimePicker\uFF0C\u7136\u540E\u53EF\u4EE5\u5728\u6D6E\u5C42\u4E2D\u9009\u62E9\u6216\u8005\u8F93\u5165\u67D0\u4E00\u65F6\u95F4\u3002</p>"}},{demo:{id:"components-time-picker-demo-value"},previewerProps:{title:"\u53D7\u63A7\u7EC4\u4EF6",filename:"components/time-picker/demo/value.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0-2","rc-input":"~1.1.0","rc-input-number":"~8.0.0","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { TimePicker } from 'antd';
const App = () => {
  const [value, setValue] = useState(null);
  const onChange = (time) => {
    setValue(time);
  };
  return <TimePicker value={value} onChange={onChange} />;
};
export default App;
`,description:"<p>value \u548C onChange \u9700\u8981\u914D\u5408\u4F7F\u7528\u3002</p>"}},{demo:{id:"components-time-picker-demo-size"},previewerProps:{title:"\u4E09\u79CD\u5927\u5C0F",filename:"components/time-picker/demo/size.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0-2","rc-input":"~1.1.0","rc-input-number":"~8.0.0","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Space, TimePicker } from 'antd';
import dayjs from 'dayjs';
const App = () => (
  <Space wrap>
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" />
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} />
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="small" />
  </Space>
);
export default App;
`,description:"<p>\u4E09\u79CD\u5927\u5C0F\u7684\u8F93\u5165\u6846\uFF0C\u5927\u7684\u7528\u5728\u8868\u5355\u4E2D\uFF0C\u4E2D\u7684\u4E3A\u9ED8\u8BA4\u3002</p>"}},{demo:{id:"components-time-picker-demo-disabled"},previewerProps:{title:"\u7981\u7528",filename:"components/time-picker/demo/disabled.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0-2","rc-input":"~1.1.0","rc-input-number":"~8.0.0","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const App = () => <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} disabled />;
export default App;
`,description:"<p>\u7981\u7528\u65F6\u95F4\u9009\u62E9\u3002</p>"}},{demo:{id:"components-time-picker-demo-hide-column"},previewerProps:{title:"\u9009\u62E9\u65F6\u5206",filename:"components/time-picker/demo/hide-column.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0-2","rc-input":"~1.1.0","rc-input-number":"~8.0.0","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
const format = 'HH:mm';
const App = () => <TimePicker defaultValue={dayjs('12:08', format)} format={format} />;
export default App;
`,description:"<p>TimePicker \u6D6E\u5C42\u4E2D\u7684\u5217\u4F1A\u968F\u7740 <code>format</code> \u53D8\u5316\uFF0C\u5F53\u7565\u53BB <code>format</code> \u4E2D\u7684\u67D0\u90E8\u5206\u65F6\uFF0C\u6D6E\u5C42\u4E2D\u5BF9\u5E94\u7684\u5217\u4E5F\u4F1A\u6D88\u5931\u3002</p>"}},{demo:{id:"components-time-picker-demo-interval-options"},previewerProps:{title:"\u6B65\u957F\u9009\u9879",filename:"components/time-picker/demo/interval-options.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0-2","rc-input":"~1.1.0","rc-input-number":"~8.0.0","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { TimePicker } from 'antd';
const App = () => <TimePicker minuteStep={15} secondStep={10} hourStep={1} />;
export default App;
`,description:"<p>\u53EF\u4EE5\u4F7F\u7528 <code>hourStep</code> <code>minuteStep</code> <code>secondStep</code> \u6309\u6B65\u957F\u5C55\u793A\u53EF\u9009\u7684\u65F6\u5206\u79D2\u3002</p>"}},{demo:{id:"components-time-picker-demo-addon"},previewerProps:{title:"\u9644\u52A0\u5185\u5BB9",filename:"components/time-picker/demo/addon.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0-2","rc-input":"~1.1.0","rc-input-number":"~8.0.0","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, TimePicker } from 'antd';
const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <TimePicker
      open={open}
      onOpenChange={setOpen}
      renderExtraFooter={() => (
        <Button size="small" type="primary" onClick={() => setOpen(false)}>
          OK
        </Button>
      )}
    />
  );
};
export default App;
`,description:"<p>\u5728 TimePicker \u9009\u62E9\u6846\u5E95\u90E8\u663E\u793A\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9\u3002</p>"}},{demo:{id:"components-time-picker-demo-12hours"},previewerProps:{title:"12 \u5C0F\u65F6\u5236",filename:"components/time-picker/demo/12hours.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0-2","rc-input":"~1.1.0","rc-input-number":"~8.0.0","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Space, TimePicker } from 'antd';
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <Space wrap>
    <TimePicker use12Hours onChange={onChange} />
    <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
  </Space>
);
export default App;
`,description:"<p>12 \u5C0F\u65F6\u5236\u7684\u65F6\u95F4\u9009\u62E9\u5668\uFF0C\u9ED8\u8BA4\u7684 format \u4E3A <code>h:mm:ss a</code>\u3002</p>"}},{demo:{id:"components-time-picker-demo-colored-popup"},previewerProps:{debug:!0,title:"\u8272\u4ED8\u304D\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7",filename:"components/time-picker/demo/colored-popup.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0-2","rc-input":"~1.1.0","rc-input-number":"~8.0.0","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <TimePicker
    onChange={onChange}
    defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
    popupClassName="myCustomClassName"
  />
);
export default App;
`,description:"<p>\u5C06\u81EA\u5B9A\u4E49 class \u4F20\u7ED9 <code>TimePicker</code> \u5F39\u6846\u3002</p>"}},{demo:{id:"components-time-picker-demo-range-picker"},previewerProps:{title:"\u8303\u56F4\u9009\u62E9\u5668",filename:"components/time-picker/demo/range-picker.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0-2","rc-input":"~1.1.0","rc-input-number":"~8.0.0","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { TimePicker } from 'antd';
const App = () => <TimePicker.RangePicker />;
export default App;
`,description:"<p>\u901A\u8FC7 <code>TimePicker.RangePicker</code> \u4F7F\u7528\u65F6\u95F4\u8303\u56F4\u9009\u62E9\u5668\u3002</p>"}},{demo:{id:"components-time-picker-demo-bordered"},previewerProps:{title:"\u65E0\u8FB9\u6846",filename:"components/time-picker/demo/bordered.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0-2","rc-input":"~1.1.0","rc-input-number":"~8.0.0","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { TimePicker } from 'antd';
const { RangePicker } = TimePicker;
const App = () => (
  <>
    <TimePicker bordered={false} />
    <RangePicker bordered={false} />
  </>
);
export default App;
`,description:"<p>\u65E0\u8FB9\u6846\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-time-picker-demo-status"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u72B6\u6001",filename:"components/time-picker/demo/status.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0-2","rc-input":"~1.1.0","rc-input-number":"~8.0.0","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Space, TimePicker } from 'antd';
const App = () => (
  <Space direction="vertical">
    <TimePicker status="error" />
    <TimePicker status="warning" />
    <TimePicker.RangePicker status="error" />
    <TimePicker.RangePicker status="warning" />
  </Space>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>status</code> \u4E3A TimePicker \u6DFB\u52A0\u72B6\u6001\uFF0C\u53EF\u9009 <code>error</code> \u6216\u8005 <code>warning</code>\u3002</p>"}},{demo:{id:"components-time-picker-demo-suffix"},previewerProps:{debug:!0,title:"\u540E\u7F00\u56FE\u6807",filename:"components/time-picker/demo/suffix.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0-2","rc-input":"~1.1.0","rc-input-number":"~8.0.0","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <TimePicker
    suffixIcon={<SmileOutlined />}
    onChange={onChange}
    defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
  />
);
export default App;
`,description:"<p>\u70B9\u51FB TimePicker\uFF0C\u7136\u540E\u53EF\u4EE5\u5728\u6D6E\u5C42\u4E2D\u9009\u62E9\u6216\u8005\u8F93\u5165\u67D0\u4E00\u65F6\u95F4\u3002</p>"}},{demo:{id:"components-time-picker-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/time-picker/demo/render-panel.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0-2","rc-input":"~1.1.0","rc-input-number":"~8.0.0","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { TimePicker } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTimePicker } = TimePicker;
const App = () => <InternalTimePicker />;
export default App;
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("hr",null),(0,e.tZ)(c.Z,{lang:"jsx"},t[2].value),(0,e.tZ)(l.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[3].value),(0,e.tZ)("th",null,t[4].value),(0,e.tZ)("th",null,t[5].value),(0,e.tZ)("th",null,t[6].value),(0,e.tZ)("th",null,t[7].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[8].value),(0,e.tZ)("td",null,t[9].value),(0,e.tZ)("td",null,t[10].value),(0,e.tZ)("td",null,t[11].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[12].value),(0,e.tZ)("td",null,t[13].value),(0,e.tZ)("td",null,t[14].value),(0,e.tZ)("td",null,t[15].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[16].value),(0,e.tZ)("td",null,t[17].value),(0,e.tZ)("td",null,t[18].value),(0,e.tZ)("td",null,t[19].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[20].value),(0,e.tZ)("td",null,t[21].value),(0,e.tZ)("td",null,t[22].value),(0,e.tZ)("td",null,t[23].value),(0,e.tZ)("td",null,t[24].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[25].value),(0,e.tZ)("td",null,t[26].value,(0,e.tZ)("code",null,t[27].value),t[28].value),(0,e.tZ)("td",null,t[29].value),(0,e.tZ)("td",null,t[30].value),(0,e.tZ)("td",null,t[31].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[32].value),(0,e.tZ)("td",null,t[33].value),(0,e.tZ)("td",null,t[34].value),(0,e.tZ)("td",null,t[35].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[36].value),(0,e.tZ)("td",null,t[37].value),(0,e.tZ)("td",null,t[38].value),(0,e.tZ)("td",null,t[39].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[40].value),(0,e.tZ)("td",null,t[41].value),(0,e.tZ)("td",null,t[42].value),(0,e.tZ)("td",null,t[43].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[44].value),(0,e.tZ)("td",null,t[45].value),(0,e.tZ)("td",null,(0,e.tZ)(r.Z,{href:"http://day.js.org/",sourceType:"a"},t[46].value)),(0,e.tZ)("td",null,t[47].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[48].value),(0,e.tZ)("td",null,t[49].value),(0,e.tZ)("td",null,t[50].value),(0,e.tZ)("td",null,t[51].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[52].value),(0,e.tZ)("td",null,t[53].value),(0,e.tZ)("td",null,(0,e.tZ)(r.Z,{to:"#disabledtime",sourceType:"Link"},t[54].value)),(0,e.tZ)("td",null,t[55].value),(0,e.tZ)("td",null,t[56].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[57].value),(0,e.tZ)("td",null,t[58].value),(0,e.tZ)("td",null,t[59].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[60].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[61].value),(0,e.tZ)("td",null,t[62].value),(0,e.tZ)("td",null,t[63].value),(0,e.tZ)("td",null,t[64].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[65].value),(0,e.tZ)("td",null,t[66].value),(0,e.tZ)("td",null,t[67].value),(0,e.tZ)("td",null,t[68].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[69].value),(0,e.tZ)("td",null,t[70].value),(0,e.tZ)("td",null,t[71].value),(0,e.tZ)("td",null,t[72].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[73].value),(0,e.tZ)("td",null,t[74].value),(0,e.tZ)("td",null,t[75].value),(0,e.tZ)("td",null,t[76].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[77].value),(0,e.tZ)("td",null,t[78].value),(0,e.tZ)("td",null,t[79].value),(0,e.tZ)("td",null,t[80].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[81].value),(0,e.tZ)("td",null,t[82].value),(0,e.tZ)("td",null,t[83].value),(0,e.tZ)("td",null,t[84].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[85].value),(0,e.tZ)("td",null,t[86].value),(0,e.tZ)("td",null,t[87].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[88].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[89].value),(0,e.tZ)("td",null,t[90].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[91].value),t[92].value,(0,e.tZ)("code",null,t[93].value),t[94].value,(0,e.tZ)("code",null,t[95].value),t[96].value,(0,e.tZ)("code",null,t[97].value)),(0,e.tZ)("td",null,t[98].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[99].value),(0,e.tZ)("td",null,t[100].value),(0,e.tZ)("td",null,t[101].value),(0,e.tZ)("td",null,t[102].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[103].value),(0,e.tZ)("td",null,t[104].value),(0,e.tZ)("td",null,t[105].value),(0,e.tZ)("td",null,t[106].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[107].value),(0,e.tZ)("td",null,t[108].value),(0,e.tZ)("td",null,t[109].value),(0,e.tZ)("td",null,t[110].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[111].value),(0,e.tZ)("td",null,t[112].value),(0,e.tZ)("td",null,t[113].value),(0,e.tZ)("td",null,t[114].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[115].value),(0,e.tZ)("td",null,t[116].value),(0,e.tZ)("td",null,t[117].value),(0,e.tZ)("td",null,t[118].value),(0,e.tZ)("td",null,t[119].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[120].value),(0,e.tZ)("td",null,t[121].value,(0,e.tZ)("code",null,t[122].value),t[123].value,(0,e.tZ)("code",null,t[124].value),t[125].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[126].value),t[127].value,(0,e.tZ)("code",null,t[128].value),t[129].value,(0,e.tZ)("code",null,t[130].value)),(0,e.tZ)("td",null,t[131].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[132].value),(0,e.tZ)("td",null,t[133].value),(0,e.tZ)("td",null,t[134].value),(0,e.tZ)("td",null,t[135].value),(0,e.tZ)("td",null,t[136].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[137].value),(0,e.tZ)("td",null,t[138].value),(0,e.tZ)("td",null,t[139].value),(0,e.tZ)("td",null,t[140].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[141].value),(0,e.tZ)("td",null,t[142].value,(0,e.tZ)("code",null,t[143].value),t[144].value,(0,e.tZ)("code",null,t[145].value)),(0,e.tZ)("td",null,t[146].value),(0,e.tZ)("td",null,t[147].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[148].value),(0,e.tZ)("td",null,t[149].value),(0,e.tZ)("td",null,(0,e.tZ)(r.Z,{href:"http://day.js.org/",sourceType:"a"},t[150].value)),(0,e.tZ)("td",null,t[151].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[152].value),(0,e.tZ)("td",null,t[153].value),(0,e.tZ)("td",null,t[154].value),(0,e.tZ)("td",null,t[155].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[156].value),(0,e.tZ)("td",null,t[157].value),(0,e.tZ)("td",null,t[158].value),(0,e.tZ)("td",null,t[159].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h4",{id:"disabledtime"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#disabledtime",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"DisabledTime"),(0,e.tZ)(c.Z,{lang:"typescript"},t[160].value),(0,e.tZ)("h2",{id:"\u65B9\u6CD5"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u65B9\u6CD5",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u65B9\u6CD5"),(0,e.tZ)(l.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[161].value),(0,e.tZ)("th",null,t[162].value),(0,e.tZ)("th",null,t[163].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[164].value),(0,e.tZ)("td",null,t[165].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[166].value),(0,e.tZ)("td",null,t[167].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h2",{id:"rangepicker"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#rangepicker",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"RangePicker"),(0,e.tZ)("p",null,t[168].value,(0,e.tZ)(r.Z,{to:"/components/date-picker-cn#rangepicker",sourceType:"Link"},t[169].value),t[170].value),(0,e.tZ)(l.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[171].value),(0,e.tZ)("th",null,t[172].value),(0,e.tZ)("th",null,t[173].value),(0,e.tZ)("th",null,t[174].value),(0,e.tZ)("th",null,t[175].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[176].value),(0,e.tZ)("td",null,t[177].value),(0,e.tZ)("td",null,(0,e.tZ)(r.Z,{to:"#rangedisabledtime",sourceType:"Link"},t[178].value)),(0,e.tZ)("td",null,t[179].value),(0,e.tZ)("td",null,t[180].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[181].value),(0,e.tZ)("td",null,t[182].value),(0,e.tZ)("td",null,t[183].value),(0,e.tZ)("td",null,t[184].value),(0,e.tZ)("td",null,t[185].value)))),(0,e.tZ)("h3",{id:"rangedisabledtime"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#rangedisabledtime",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"RangeDisabledTime"),(0,e.tZ)(c.Z,{lang:"typescript"},t[186].value),(0,e.tZ)("h2",{id:"design-token"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,e.tZ)(a.Z,{component:"DatePicker"}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"faq"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,(0,e.tZ)(r.Z,{to:"/docs/react/use-custom-date-library#timepicker",sourceType:"Link"},t[187].value))))))}o.default=u}}]);
