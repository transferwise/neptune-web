_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[85],{"+JZ1":function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/Select",function(){return a("0c+Z")}])},"0c+Z":function(e,n,a){"use strict";a.r(n),a.d(n,"meta",(function(){return u})),a.d(n,"default",(function(){return b}));var t=a("cxan"),l=a("HbGN"),o=a("ERkP"),c=a.n(o),r=a("ZVZ0"),i=a("Qi1R"),s=a("RmhF"),d=a("/Vl7"),u=(c.a.createElement,{name:"Select"}),h={meta:u};function b(e){var n=e.components,a=Object(l.a)(e,["components"]);return Object(r.a)("wrapper",Object(t.a)({},h,a,{components:n,mdxType:"MDXLayout"}),Object(r.a)(i.b,{code:"() => {\n  const [selected, setSelected] = React.useState({\n    value: 0,\n    label: 'A thing',\n    note: 'with a note',\n  });\n\n  return (\n    <Select\n      size=\"md\"\n      placeholder=\"Placeholder\"\n      dropdownRight=\"xs\"\n      dropdownWidth=\"lg\"\n      inverse={false}\n      block\n      selected={selected}\n      disabled={false}\n      onChange={(v) => setSelected(v)}\n      required={false}\n      searchPlaceholder=\"Search placeholder\"\n      dropdownUp={false}\n      search\n      options={[\n        { header: 'Basic' },\n        { value: 0, label: 'A thing', note: 'with a note' },\n        { value: 1, label: 'Another thing', secondary: 'with secondary text this time' },\n        { value: 2, label: 'A disabled thing', disabled: true },\n        { header: 'Icons' },\n        { value: 3, label: 'Profile', icon: <ProfileIcon /> },\n        { value: 4, label: 'Globe', icon: <GlobeIcon /> },\n        { header: 'Currencies' },\n        { value: 5, label: 'British pound', currency: 'gbp' },\n        { value: 6, label: 'Euro', currency: 'eur' },\n        { separator: true },\n        { value: 7, label: 'Something else' },\n        { header: 'Options with searchable alternatives' },\n        {\n          value: 8,\n          label: 'A thing with searchable alternatives',\n          searchStrings: ['abbreviation', 'acronym', 'nickname'],\n        },\n      ]}\n    />\n  );\n};\n",scope:{Select:s.a,GlobeIcon:d.n,ProfileIcon:d.t},display:"vertical",mdxType:"LiveEditorBlock"}),Object(r.a)(i.a,{componentName:"Select",mdxType:"GeneratePropsTable"}))}b.isMDXComponent=!0}},[["+JZ1",0,1,2,6,3,5,7,9,10,11,4]]]);