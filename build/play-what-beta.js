module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=13)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e[e.None=0]="None",e[e.Name=1]="Name",e[e.Degree=2]="Degree",e[e.Interval=3]="Interval",e[e.NoteIndex=4]="NoteIndex",e[e.PitchClass=5]="PitchClass",e[e.Octave=6]="Octave",e[e.Frequency=7]="Frequency"}(n.NOTE_LABEL||(n.NOTE_LABEL={})),n.INTERVAL={P1:{id:"P1",name:"Perfect Unison",degree:1,semitones:0},m2:{id:"m2",name:"Minor 2nd",degree:2,semitones:1},M2:{id:"M2",name:"Major 2nd",degree:2,semitones:2},A2:{id:"A2",name:"Augmented 2nd",degree:2,semitones:3},d3:{id:"d3",name:"Diminished 3rd",degree:3,semitones:2},m3:{id:"m3",name:"Minor 3rd",degree:3,semitones:3},M3:{id:"M3",name:"Major 3rd",degree:3,semitones:4},A3:{id:"A3",name:"Augmented 3rd",degree:3,semitones:5},d4:{id:"d4",name:"Diminished 4th",degree:4,semitones:4},P4:{id:"P4",name:"Perfect 4th",degree:4,semitones:5},A4:{id:"A4",name:"Augmented 4th",degree:4,semitones:6},d5:{id:"d5",name:"Diminished 5th",degree:5,semitones:6},P5:{id:"P5",name:"Perfect 5th",degree:5,semitones:7},A5:{id:"A5",name:"Augmented 5th",degree:5,semitones:8},d6:{id:"d6",name:"Diminished 6th",degree:6,semitones:7},m6:{id:"m6",name:"Minor 6th",degree:6,semitones:8},M6:{id:"M6",name:"Major 6th",degree:6,semitones:9},A6:{id:"A6",name:"Augmented 6th",degree:6,semitones:10},d7:{id:"d7",name:"Diminished 7th",degree:7,semitones:9},m7:{id:"m7",name:"Minor 7th",degree:7,semitones:10},M7:{id:"M7",name:"Major 7th",degree:7,semitones:11}},n.MAJOR_SCALE=[n.INTERVAL.P1,n.INTERVAL.M2,n.INTERVAL.M3,n.INTERVAL.P4,n.INTERVAL.P5,n.INTERVAL.M6,n.INTERVAL.M7],n.CALIBRATION_NOTE={frequency:440,noteIndex:9},n.CALIBRATION_CONSTANT=Math.pow(2,1/12),n.TONIC={C:{id:"C",name:"C",degreeInC:1,pitchClass:0},D:{id:"D",name:"D",degreeInC:2,pitchClass:2},E:{id:"E",name:"E",degreeInC:3,pitchClass:4},F:{id:"F",name:"F",degreeInC:4,pitchClass:5},G:{id:"G",name:"G",degreeInC:5,pitchClass:7},A:{id:"A",name:"A",degreeInC:6,pitchClass:9},B:{id:"B",name:"B",degreeInC:7,pitchClass:11}},n.ACCIDENTAL={Flat:{id:"Flat",name:"b",offset:-1},Natural:{id:"Natural",name:"♮",offset:0},Sharp:{id:"Sharp",name:"#",offset:1}},n.INTERVAL_PAIR={P1:{id:n.INTERVAL.P1.id,name:n.INTERVAL.P1.name,intervals:[n.INTERVAL.P1,n.INTERVAL.P1]},m2:{id:n.INTERVAL.m2.id,name:n.INTERVAL.m2.name,intervals:[n.INTERVAL.P1,n.INTERVAL.m2]},M2:{id:n.INTERVAL.M2.id,name:n.INTERVAL.M2.name,intervals:[n.INTERVAL.P1,n.INTERVAL.M2]},A2:{id:n.INTERVAL.A2.id,name:n.INTERVAL.A2.name,intervals:[n.INTERVAL.P1,n.INTERVAL.A2]},d3:{id:n.INTERVAL.d3.id,name:n.INTERVAL.d3.name,intervals:[n.INTERVAL.P1,n.INTERVAL.d3]},m3:{id:n.INTERVAL.m3.id,name:n.INTERVAL.m3.name,intervals:[n.INTERVAL.P1,n.INTERVAL.m3]},M3:{id:n.INTERVAL.M3.id,name:n.INTERVAL.M3.name,intervals:[n.INTERVAL.P1,n.INTERVAL.M3]},P4:{id:n.INTERVAL.P4.id,name:n.INTERVAL.P4.name,intervals:[n.INTERVAL.P1,n.INTERVAL.P4]},A4:{id:n.INTERVAL.A4.id,name:n.INTERVAL.A4.name,intervals:[n.INTERVAL.P1,n.INTERVAL.A4]},d5:{id:n.INTERVAL.d5.id,name:n.INTERVAL.d5.name,intervals:[n.INTERVAL.P1,n.INTERVAL.d5]},P5:{id:n.INTERVAL.P5.id,name:n.INTERVAL.P5.name,intervals:[n.INTERVAL.P1,n.INTERVAL.P5]},A5:{id:n.INTERVAL.A5.id,name:n.INTERVAL.A5.name,intervals:[n.INTERVAL.P1,n.INTERVAL.A5]},d6:{id:n.INTERVAL.d6.id,name:n.INTERVAL.d6.name,intervals:[n.INTERVAL.P1,n.INTERVAL.d6]},m6:{id:n.INTERVAL.m6.id,name:n.INTERVAL.m6.name,intervals:[n.INTERVAL.P1,n.INTERVAL.m6]},M6:{id:n.INTERVAL.M6.id,name:n.INTERVAL.M6.name,intervals:[n.INTERVAL.P1,n.INTERVAL.M6]},d7:{id:n.INTERVAL.d7.id,name:n.INTERVAL.d7.name,intervals:[n.INTERVAL.P1,n.INTERVAL.d7]},m7:{id:n.INTERVAL.m7.id,name:n.INTERVAL.m7.name,intervals:[n.INTERVAL.P1,n.INTERVAL.m7]},M7:{id:n.INTERVAL.M7.id,name:n.INTERVAL.M7.name,intervals:[n.INTERVAL.P1,n.INTERVAL.M7]}},n.CHORD={Maj:{id:"Maj",name:"Major Triad",intervals:[n.INTERVAL.P1,n.INTERVAL.M3,n.INTERVAL.P5]},Maj6:{id:"Maj6",name:"Major 6th",intervals:[n.INTERVAL.P1,n.INTERVAL.M3,n.INTERVAL.P5,n.INTERVAL.M6]},Maj7:{id:"Maj7",name:"Major 7th",intervals:[n.INTERVAL.P1,n.INTERVAL.M3,n.INTERVAL.P5,n.INTERVAL.M7]},Min:{id:"Min",name:"Minor Triad",intervals:[n.INTERVAL.P1,n.INTERVAL.m3,n.INTERVAL.P5]},Min6:{id:"Min6",name:"Minor 6th",intervals:[n.INTERVAL.P1,n.INTERVAL.m3,n.INTERVAL.P5,n.INTERVAL.M6]},Min7:{id:"Min7",name:"Minor 7th",intervals:[n.INTERVAL.P1,n.INTERVAL.m3,n.INTERVAL.P5,n.INTERVAL.m7]},MinMaj7:{id:"MinMaj7",name:"Minor-Major 7th",intervals:[n.INTERVAL.P1,n.INTERVAL.m3,n.INTERVAL.P5,n.INTERVAL.M7]},Dom7:{id:"Dom7",name:"Dominant 7th",intervals:[n.INTERVAL.P1,n.INTERVAL.M3,n.INTERVAL.P5,n.INTERVAL.m7]},Aug:{id:"Aug",name:"Augmented Triad",intervals:[n.INTERVAL.P1,n.INTERVAL.M3,n.INTERVAL.A5]},Aug7:{id:"Aug7",name:"Augmented Seventh",intervals:[n.INTERVAL.P1,n.INTERVAL.M3,n.INTERVAL.A5,n.INTERVAL.m7]},Dim:{id:"Dim",name:"Diminished Triad",intervals:[n.INTERVAL.P1,n.INTERVAL.m3,n.INTERVAL.d5]},Dim7:{id:"Dim7",name:"Diminished 7th",intervals:[n.INTERVAL.P1,n.INTERVAL.m3,n.INTERVAL.d5,n.INTERVAL.d7]},HalfDim7:{id:"HalfDim7",name:"Half-Diminished 7th",intervals:[n.INTERVAL.P1,n.INTERVAL.m3,n.INTERVAL.d5,n.INTERVAL.m7]},Sus2:{id:"Sus2",name:"Suspended 2nd",intervals:[n.INTERVAL.P1,n.INTERVAL.M2,n.INTERVAL.P5]},Sus4:{id:"Sus4",name:"Suspended 4th",intervals:[n.INTERVAL.P1,n.INTERVAL.P4,n.INTERVAL.P5]}},n.SCALE={Major:{id:"Major",name:"Major",intervals:[n.INTERVAL.P1,n.INTERVAL.M2,n.INTERVAL.M3,n.INTERVAL.P4,n.INTERVAL.P5,n.INTERVAL.M6,n.INTERVAL.M7]},NatualMinor:{id:"NatualMinor",name:"Natual Minor",intervals:[n.INTERVAL.P1,n.INTERVAL.M2,n.INTERVAL.m3,n.INTERVAL.P4,n.INTERVAL.P5,n.INTERVAL.m6,n.INTERVAL.m7]},HarmonicMinor:{id:"HarmonicMinor",name:"Harmonic Minor",intervals:[n.INTERVAL.P1,n.INTERVAL.M2,n.INTERVAL.m3,n.INTERVAL.P4,n.INTERVAL.P5,n.INTERVAL.m6,n.INTERVAL.M7]},MajorPentatonic:{id:"MajorPentatonic",name:"Major Pentatonic",intervals:[n.INTERVAL.P1,n.INTERVAL.M2,n.INTERVAL.M3,n.INTERVAL.P5,n.INTERVAL.M6]},MinorPentatonic:{id:"MinorPentatonic",name:"Minor Pentatonic",intervals:[n.INTERVAL.P1,n.INTERVAL.m3,n.INTERVAL.P4,n.INTERVAL.P5,n.INTERVAL.m7]},Chromatic:{id:"Chromatic",name:"Chromatic",intervals:[n.INTERVAL.P1,n.INTERVAL.m2,n.INTERVAL.M2,n.INTERVAL.m3,n.INTERVAL.M3,n.INTERVAL.P4,n.INTERVAL.A4,n.INTERVAL.P5,n.INTERVAL.m6,n.INTERVAL.M6,n.INTERVAL.m7,n.INTERVAL.M7]}},n.MODE={Ionian:{id:"Ionian",name:"Ionian",intervals:[n.INTERVAL.P1,n.INTERVAL.M2,n.INTERVAL.M3,n.INTERVAL.P4,n.INTERVAL.P5,n.INTERVAL.M6,n.INTERVAL.M7]},Dorian:{id:"Dorian",name:"Dorian",intervals:[n.INTERVAL.P1,n.INTERVAL.M2,n.INTERVAL.m3,n.INTERVAL.P4,n.INTERVAL.P5,n.INTERVAL.M6,n.INTERVAL.m7]},Phrygian:{id:"Phrygian",name:"Phrygian",intervals:[n.INTERVAL.P1,n.INTERVAL.m2,n.INTERVAL.m3,n.INTERVAL.P4,n.INTERVAL.P5,n.INTERVAL.m6,n.INTERVAL.m7]},Lydian:{id:"Lydian",name:"Lydian",intervals:[n.INTERVAL.P1,n.INTERVAL.M2,n.INTERVAL.M3,n.INTERVAL.A4,n.INTERVAL.P5,n.INTERVAL.M6,n.INTERVAL.M7]},Mixolydian:{id:"Mixolydian",name:"Mixolydian",intervals:[n.INTERVAL.P1,n.INTERVAL.M2,n.INTERVAL.M3,n.INTERVAL.P4,n.INTERVAL.P5,n.INTERVAL.M6,n.INTERVAL.m7]},Aeolian:{id:"Aeolian",name:"Aeolian",intervals:[n.INTERVAL.P1,n.INTERVAL.M2,n.INTERVAL.m3,n.INTERVAL.P4,n.INTERVAL.P5,n.INTERVAL.m6,n.INTERVAL.m7]},Locrian:{id:"Locrian",name:"Locrian",intervals:[n.INTERVAL.P1,n.INTERVAL.m2,n.INTERVAL.m3,n.INTERVAL.P4,n.INTERVAL.d5,n.INTERVAL.m6,n.INTERVAL.m7]}},n.ROMAN_NUMERAL={I:{id:"I",name:"I",intervals:[n.INTERVAL.P1,n.INTERVAL.M3,n.INTERVAL.P5]},ii:{id:"ii",name:"ii",intervals:[n.INTERVAL.M2,n.INTERVAL.P4,n.INTERVAL.M6]},iii:{id:"iii",name:"iii",intervals:[n.INTERVAL.M3,n.INTERVAL.P5,n.INTERVAL.M7]},IV:{id:"IV",name:"IV",intervals:[n.INTERVAL.P4,n.INTERVAL.M6,Object.assign({octaveOffset:1},n.INTERVAL.P1)]},V:{id:"V",name:"V",intervals:[n.INTERVAL.P5,n.INTERVAL.M7,Object.assign({octaveOffset:1},n.INTERVAL.M2)]},vi:{id:"vi",name:"vi",intervals:[n.INTERVAL.M6,Object.assign({octaveOffset:1},n.INTERVAL.P1),Object.assign({octaveOffset:1},n.INTERVAL.M3)]},vii:{id:"vii",name:"vii",intervals:[n.INTERVAL.M7,Object.assign({octaveOffset:1},n.INTERVAL.M2),Object.assign({octaveOffset:1},n.INTERVAL.P4)]}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0})},function(e,n,t){"use strict";e.exports=t(18)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=t(0),o=t(2),i=t(4),a=t(24);n.DEFAULT_KEY_CENTER={tonic:r.TONIC.C,accidental:r.ACCIDENTAL.Natural,octave:4},n.DEFAULT_CONCEPT={intervals:[],chordInversion:0},n.withNotes=function(e,t,r){return function(s){let l=Object.assign({},n.DEFAULT_CONCEPT,t),c=Object.assign({},n.DEFAULT_KEY_CENTER,r),u=i.TheoryEngine.parseIntervals(c.tonic,c.accidental,c.octave,l.intervals,l.chordInversion);return o.createElement(a.ErrorBoundary,null,o.createElement(e,Object.assign({},s,{notes:u})))}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=t(0),o=t(11);class i{}i.applyChordInversion=(e,n)=>{for(let t=0;t<n;t++)e[t].octaveOffset=e[t].octaveOffset+1;n-=e.length*Math.floor(n/e.length),e.push.apply(e,e.splice(0,n))},i.parseIntervals=(e,n,t,r,o=0)=>{let a=[];for(let e=0;e<r.length;e++)a.push(Object.assign({octaveOffset:0},r[e]));if(o){let e=o%r.length;i.applyChordInversion(a,e)}let s=[];for(let r=0;r<a.length;r++){let o=i.getFunctionalNote(e,n,t,a[r]);s.push(o)}return s},i.getFunctionalNote=(e,n,t,r)=>{let o=i.getNoteDegree(e,r),a=i.getPitchClass(e,n,r),s=i.getAccidentalOffset(o,a,n),l=i.getNoteName(o,s),c=i.getFunctionalNoteOctave(e,n,t,r),u=i.getNoteIndex(c,a);return{interval:r,pitchClass:a,name:l,noteOctave:c,noteIndex:u,frequency:i.getFrequency(u)}},i.getNonfunctionalNote=e=>({noteIndex:e,noteOctave:i.getPhysicalNoteOctave(e),pitchClass:i.getRelativePotision(e),frequency:i.getFrequency(e),interval:null,name:""}),i.getNoteDegree=(e,n)=>o.Utils.moduloSum(e.degreeInC,n.degree,7,1),i.getPitchClass=(e,n,t)=>o.Utils.moduloSum(e.pitchClass+n.offset,t.semitones,12,0),i.getFunctionalNoteOctave=(e,n,t,r)=>t+Math.floor((e.pitchClass+n.offset+r.semitones)/12)+r.octaveOffset,i.getPhysicalNoteOctave=e=>4+Math.floor(e/12),i.getNoteIndex=(e,n)=>12*(e-4)+n,i.getAccidentalOffset=(e,n,t)=>{let r=n-i.getTonicByDegree(e).pitchClass;return r<0&&t.offset>0?r+=12:r>0&&t.offset<0&&(r-=12),r},i.getNoteName=(e,n)=>i.getTonicByDegree(e).name+i.getAccidentalString(n),i.getTonicByDegree=e=>Object.values(r.TONIC)[e-1],i.getRelativePotision=e=>e>=0?e%12:12+e%12,i.getFrequency=e=>r.CALIBRATION_NOTE.frequency*Math.pow(r.CALIBRATION_CONSTANT,e-r.CALIBRATION_NOTE.noteIndex),i.getAccidentalString=e=>{switch(e){case 0:return"";case 1:return"#";case 2:return"x";case-1:return"b";case-2:return"bb";default:return e<0?-e+"b":e+"#"}},i.getNoteLabel=(e,n)=>{switch(n){case r.NOTE_LABEL.None:return"";case r.NOTE_LABEL.Name:return e.name;case r.NOTE_LABEL.Degree:return null!==e.interval?e.interval.degree:"";case r.NOTE_LABEL.Interval:return null!==e.interval?e.interval.id:"";case r.NOTE_LABEL.PitchClass:return e.pitchClass;case r.NOTE_LABEL.NoteIndex:return e.noteIndex;case r.NOTE_LABEL.Octave:return e.noteOctave;case r.NOTE_LABEL.Frequency:return Math.round(e.frequency);default:return""}},i.isNoteValid=(e,n,t)=>t?e.noteIndex===n:n>=0?e.pitchClass===n%12:e.pitchClass===n%12+12,i.getNote=(e,n,t)=>{let r=e.find(e=>i.isNoteValid(e,n,t))||null;return null===r&&(r=i.getNonfunctionalNote(n)),r},i.filterNotes=(e,n)=>{return e.filter(e=>void 0!==n.find(n=>n.id===e.interval.id))},n.TheoryEngine=i},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=t(9),o=t(2),i=t(4);t(10);const a=t(0);n.DEFAULT_FRETBOARD_PROPS={notes:[],fretLabel:a.NOTE_LABEL.Name,filterOctave:!0,showFretNumbers:!0,showDots:!0,fretLow:0,fretHigh:12,strings:[{tuning:16},{tuning:11},{tuning:7},{tuning:2},{tuning:-3},{tuning:-8}]};const s=[3,5,7,9];n.Fretboard=function(e){let t=Object.assign({},n.DEFAULT_FRETBOARD_PROPS,e);return o.createElement("div",{className:"fretboard"},t.showFretNumbers&&function(e){let n=[];for(let t=e.fretLow;t<=e.fretHigh;t++)n.push(o.createElement("div",{className:"fret-number",key:t},t));return o.createElement("div",{className:"fret-numbers-container"},n)}(t),function(e){return e.strings.map((n,t)=>o.createElement(r.FretboardString,{key:t,filterOctave:e.filterOctave,notes:n.unfilteredIntervals?i.TheoryEngine.filterNotes(e.notes,n.unfilteredIntervals):e.notes,fretLabel:e.fretLabel,tuning:n.tuning,fretLow:e.fretLow,fretHigh:e.fretHigh}))}(t),t.showDots&&function(e){let n=[];for(let r=e.fretLow;r<=e.fretHigh;r++)n.push(o.createElement("div",{className:"fretboard-fret-dots",key:r},0==(t=r%12)?"• •":s.includes(t)?"•":""));var t;return o.createElement("div",{className:"dots-container"},n)}(t))}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=t(2);t(12);const o=t(23),i=t(4);t(12);const a=t(0),s=t(11);n.DEFAULT_KEYBOARD_PROPS={notes:[],keyLabel:a.NOTE_LABEL.Name,filterOctave:!0,keyLow:0,keyHigh:24};const l=[0,2,4,5,7,9,11];n.Keyboard=function(e){let t=Object.assign({},n.DEFAULT_KEYBOARD_PROPS,e);return r.createElement("div",{className:"keyboard"},function(e){let n=[];for(let t=e.keyLow;t<=e.keyHigh;t++){let a=l.includes(s.Utils.modulo(t,12))?o.KeyboardKeyType.White:o.KeyboardKeyType.Black;n.push(r.createElement(o.KeyboardKey,{key:t,type:a,note:i.TheoryEngine.getNote(e.notes,t,e.filterOctave),keyLabel:e.keyLabel}))}return n}(t))}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[t].concat(i).concat([o]).join("\n")}var a,s,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),n.push(s))}},n}},function(e,n,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),l=null,c=0,u=[],d=t(17);function f(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(L(r.parts[a],n))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(L(r.parts[a],n));i[r.id]={id:r.id,refs:1,parts:s}}}}function m(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function A(e,n){var t=s(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),u.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,t);t.insertBefore(n,o)}}function E(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=u.indexOf(e);n>=0&&u.splice(n,1)}function p(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return N(n,e.attrs),A(e,n),n}function N(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function L(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var a=c++;t=l||(l=p(n)),r=R.bind(null,t,a,!1),o=R.bind(null,t,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",N(n,e.attrs),A(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=d(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,n),o=function(){E(t),t.href&&URL.revokeObjectURL(t.href)}):(t=p(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){E(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=m(e,n);return f(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}e&&f(m(e,n),n);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var T,I=(T=[],function(e,n){return T[e]=n,T.filter(Boolean).join("\n")});function R(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=I(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=t(2),o=t(4),i=t(20);t(10),n.FretboardString=function(e){return r.createElement("div",{className:"fretboard-string"},function(e){let n=[];for(let t=e.fretLow;t<=e.fretHigh;t++)n.push(r.createElement(i.FretboardFret,{key:t,fretNumber:t,note:o.TheoryEngine.getNote(e.notes,e.tuning+t,e.filterOctave),fretLabel:e.fretLabel}));return n}(e),r.createElement("div",{className:"fretboard-fret-string"}))}},function(e,n,t){var r=t(21);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(8)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});class r{}r.moduloSum=(e,n,t,o=0,i=!1)=>{let a=i?e-o-(n-o):e-o+(n-o);return r.modulo(a,t)+o},r.modulo=(e,n)=>(e%n+n)%n,n.Utils=r},function(e,n,t){var r=t(22);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(8)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){e.exports=t(14)},function(e,n,t){"use strict";t.r(n);t(15);var r=t(1);t.d(n,"Tonic",function(){return r.Tonic}),t.d(n,"Accidental",function(){return r.Accidental}),t.d(n,"Interval",function(){return r.Interval}),t.d(n,"ConceptPreset",function(){return r.ConceptPreset}),t.d(n,"PhysicalNote",function(){return r.PhysicalNote}),t.d(n,"FunctionalNote",function(){return r.FunctionalNote}),t.d(n,"CompleteNote",function(){return r.CompleteNote});var o=t(0);t.d(n,"NOTE_LABEL",function(){return o.NOTE_LABEL}),t.d(n,"INTERVAL",function(){return o.INTERVAL}),t.d(n,"MAJOR_SCALE",function(){return o.MAJOR_SCALE}),t.d(n,"CALIBRATION_NOTE",function(){return o.CALIBRATION_NOTE}),t.d(n,"TONIC",function(){return o.TONIC}),t.d(n,"ACCIDENTAL",function(){return o.ACCIDENTAL}),t.d(n,"INTERVAL_PAIR",function(){return o.INTERVAL_PAIR}),t.d(n,"CHORD",function(){return o.CHORD}),t.d(n,"SCALE",function(){return o.SCALE}),t.d(n,"MODE",function(){return o.MODE}),t.d(n,"ROMAN_NUMERAL",function(){return o.ROMAN_NUMERAL});var i=t(5);t.d(n,"Fretboard",function(){return i.Fretboard}),t.d(n,"FretboardProps",function(){return i.FretboardProps}),t.d(n,"DEFAULT_FRETBOARD_PROPS",function(){return i.DEFAULT_FRETBOARD_PROPS});var a=t(9);t.d(n,"FretboardStringConfig",function(){return a.FretboardStringConfig});var s=t(6);t.d(n,"Keyboard",function(){return s.Keyboard}),t.d(n,"KeyboardProps",function(){return s.KeyboardProps}),t.d(n,"DEFAULT_KEYBOARD_PROPS",function(){return s.DEFAULT_KEYBOARD_PROPS});var l=t(3);t.d(n,"withNotes",function(){return l.withNotes}),t.d(n,"ViewerProps",function(){return l.ViewerProps}),t.d(n,"KeyCenter",function(){return l.KeyCenter}),t.d(n,"DEFAULT_KEY_CENTER",function(){return l.DEFAULT_KEY_CENTER}),t.d(n,"Concept",function(){return l.Concept}),t.d(n,"DEFAULT_CONCEPT",function(){return l.DEFAULT_CONCEPT})},function(e,n,t){var r=t(16);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(8)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(7)(!1)).push([e.i,".degree-1 {\r\n\tbackground-color: red;\r\n\tcolor: white;\r\n}\r\n\r\n.degree-2 {\r\n\tbackground-color: orange;\r\n\tcolor: white;\r\n}\r\n\r\n.degree-3 {\r\n\tbackground-color: yellow;\r\n\tcolor: black;\r\n}\r\n\r\n.degree-4 {\r\n\tbackground-color: green;\r\n\tcolor: white;\r\n}\r\n\r\n.degree-5 {\r\n\tbackground-color: blue;\r\n\tcolor: white;\r\n}\r\n\r\n.degree-6 {\r\n\tbackground-color: indigo;\r\n\tcolor: white;\r\n}\r\n\r\n.degree-7 {\r\n\tbackground-color: purple;\r\n\tcolor: white;\r\n}\r\n\r\n\r\n\r\n.error-boundary {\r\n\tcolor: red;\r\n}",""])},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,n,t){"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(19),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.concurrent_mode"):60111,m=o?Symbol.for("react.forward_ref"):60112,A=o?Symbol.for("react.suspense"):60113,E=o?Symbol.for("react.memo"):60115,p=o?Symbol.for("react.lazy"):60116,N="function"==typeof Symbol&&Symbol.iterator;function L(e){for(var n=arguments.length-1,t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<n;r++)t+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,n,t,r,o,i,a,s){if(!e){if(e=void 0,void 0===n)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[t,r,o,i,a,s],c=0;(e=Error(n.replace(/%s/g,function(){return l[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",t)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I={};function R(e,n,t){this.props=e,this.context=n,this.refs=I,this.updater=t||T}function y(){}function v(e,n,t){this.props=e,this.context=n,this.refs=I,this.updater=t||T}R.prototype.isReactComponent={},R.prototype.setState=function(e,n){"object"!=typeof e&&"function"!=typeof e&&null!=e&&L("85"),this.updater.enqueueSetState(this,e,n,"setState")},R.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=R.prototype;var h=v.prototype=new y;h.constructor=v,r(h,R.prototype),h.isPureReactComponent=!0;var b={current:null},g={current:null},V=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function M(e,n,t){var r=void 0,o={},a=null,s=null;if(null!=n)for(r in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(a=""+n.key),n)V.call(n,r)&&!P.hasOwnProperty(r)&&(o[r]=n[r]);var l=arguments.length-2;if(1===l)o.children=t;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:i,type:e,key:a,ref:s,props:o,_owner:g.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var C=/\/+/g,x=[];function _(e,n,t,r){if(x.length){var o=x.pop();return o.result=e,o.keyPrefix=n,o.func=t,o.context=r,o.count=0,o}return{result:e,keyPrefix:n,func:t,context:r,count:0}}function k(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>x.length&&x.push(e)}function w(e,n,t){return null==e?0:function e(n,t,r,o){var s=typeof n;"undefined"!==s&&"boolean"!==s||(n=null);var l=!1;if(null===n)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(n.$$typeof){case i:case a:l=!0}}if(l)return r(o,n,""===t?"."+j(n,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(n))for(var c=0;c<n.length;c++){var u=t+j(s=n[c],c);l+=e(s,u,r,o)}else if(u=null===n||"object"!=typeof n?null:"function"==typeof(u=N&&n[N]||n["@@iterator"])?u:null,"function"==typeof u)for(n=u.call(n),c=0;!(s=n.next()).done;)l+=e(s=s.value,u=t+j(s,c++),r,o);else"object"===s&&L("31","[object Object]"==(r=""+n)?"object with keys {"+Object.keys(n).join(", ")+"}":r,"");return l}(e,"",n,t)}function j(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return n[e]})}(e.key):n.toString(36)}function S(e,n){e.func.call(e.context,n,e.count++)}function D(e,n,t){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?F(e,r,t,function(e){return e}):null!=e&&(O(e)&&(e=function(e,n){return{$$typeof:i,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+t)),r.push(e))}function F(e,n,t,r,o){var i="";null!=t&&(i=(""+t).replace(C,"$&/")+"/"),w(e,D,n=_(n,i,r,o)),k(n)}function U(){var e=b.current;return null===e&&L("321"),e}var B={Children:{map:function(e,n,t){if(null==e)return e;var r=[];return F(e,r,null,n,t),r},forEach:function(e,n,t){if(null==e)return e;w(e,S,n=_(null,null,n,t)),k(n)},count:function(e){return w(e,function(){return null},null)},toArray:function(e){var n=[];return F(e,n,null,function(e){return e}),n},only:function(e){return O(e)||L("143"),e}},createRef:function(){return{current:null}},Component:R,PureComponent:v,createContext:function(e,n){return void 0===n&&(n=null),(e={$$typeof:d,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:m,render:e}},lazy:function(e){return{$$typeof:p,_ctor:e,_status:-1,_result:null}},memo:function(e,n){return{$$typeof:E,type:e,compare:void 0===n?null:n}},useCallback:function(e,n){return U().useCallback(e,n)},useContext:function(e,n){return U().useContext(e,n)},useEffect:function(e,n){return U().useEffect(e,n)},useImperativeHandle:function(e,n,t){return U().useImperativeHandle(e,n,t)},useDebugValue:function(){},useLayoutEffect:function(e,n){return U().useLayoutEffect(e,n)},useMemo:function(e,n){return U().useMemo(e,n)},useReducer:function(e,n,t){return U().useReducer(e,n,t)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:s,StrictMode:l,Suspense:A,createElement:M,cloneElement:function(e,n,t){null==e&&L("267",e);var o=void 0,a=r({},e.props),s=e.key,l=e.ref,c=e._owner;if(null!=n){void 0!==n.ref&&(l=n.ref,c=g.current),void 0!==n.key&&(s=""+n.key);var u=void 0;for(o in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),n)V.call(n,o)&&!P.hasOwnProperty(o)&&(a[o]=void 0===n[o]&&void 0!==u?u[o]:n[o])}if(1===(o=arguments.length-2))a.children=t;else if(1<o){u=Array(o);for(var d=0;d<o;d++)u[d]=arguments[d+2];a.children=u}return{$$typeof:i,type:e.type,key:s,ref:l,props:a,_owner:c}},createFactory:function(e){var n=M.bind(null,e);return n.type=e,n},isValidElement:O,version:"16.8.6",unstable_ConcurrentMode:f,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:b,ReactCurrentOwner:g,assign:r}},K={default:B},$=K&&B||K;e.exports=$.default||$},function(e,n,t){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(e){return n[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,s,l=a(e),c=1;c<arguments.length;c++){for(var u in t=Object(arguments[c]))o.call(t,u)&&(l[u]=t[u]);if(r){s=r(t);for(var d=0;d<s.length;d++)i.call(t,s[d])&&(l[s[d]]=t[s[d]])}}return l}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=t(2),o=t(4);t(10),n.FretboardFret=function(e){let n=["fretboard-fret","wood"],t=[null!==e.note.interval?`degree-${e.note.interval.degree}`:"","fretboard-fret-label"];return 0===e.fretNumber&&n.push("fretboard-fret-open"),r.createElement("div",{className:n.join(" ")},r.createElement("div",{className:t.join(" ")},o.TheoryEngine.getNoteLabel(e.note,e.fretLabel)))}},function(e,n,t){(e.exports=t(7)(!1)).push([e.i,"/* Fretboard */\r\n\r\n.fretboard {\r\n\tdisplay: inline-block;\r\n\tmargin: auto;\r\n    font-size: 12px;\r\n\t/*box-shadow: 1px 1px 5px #888888;*/\r\n\tposition: relative;\r\n\tmargin: 20px;\r\n\ttext-align: center;\r\n\tfont-family: sans-serif;\r\n}\r\n\r\n/* FretboardString */\r\n\r\n.fretboard-string {\r\n\twidth: 100%;\r\n\theight: 20px;\r\n\tposition: relative;\r\n}\r\n\r\n/* FretboardFret */\r\n\r\n.fretboard-fret {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\theight: 20px;\r\n\twidth: 30px;\r\n\tborder-right: 2px solid darkgrey;\r\n}\r\n\r\n.fretboard-fret-open {\r\n\tborder-right: 3px solid grey;\r\n}\r\n\r\n.fretboard-fret-label {\r\n\tdisplay: inline-block;\r\n    z-index: 10;\r\n    position: absolute;\r\n    left: 1px;\r\n    top: 1px;\r\n    height: 18px;\r\n    line-height: 18px;\r\n\twidth: 28px;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.fretboard-fret-string {\r\n\tposition: absolute;\r\n    top: 10px;\r\n    left: 0px;\r\n    height: 1px;\r\n    background-color: grey;\r\n    width: 100%;\r\n}\r\n\r\n\r\n/* Fret Numbers */\r\n\r\n.fret-numbers-container {\r\n\tposition: absolute;\r\n    display: inline-block;\r\n    top: -16px;\r\n    left: 0px;\r\n    height: 16px;\r\n}\r\n\r\n.fret-number {\r\n    width: 30px;\r\n\tcolor: grey;\r\n\tdisplay: inline-block;\r\n\tmargin: 1px;\r\n\tfont-size: 12px;\r\n}\r\n\r\n/* Fret Dots */\r\n\r\n.dots-container {\r\n\tposition: absolute;\r\n    display: inline-block;\r\n    bottom: -16px;\r\n    left: 0px;\r\n    height: 16px;\r\n}\r\n\r\n.fretboard-fret-dots {\r\n    width: 30px;\r\n\tcolor: grey;\r\n\tdisplay: inline-block;\r\n\tmargin: 1px;\r\n\tfont-size: 16px;\r\n}\r\n\r\n/* Colors */\r\n\r\n.wood {\r\n\tbackground-color: burlywood;\r\n\tcolor: black;\r\n}",""])},function(e,n,t){(e.exports=t(7)(!1)).push([e.i,"/* Keyboard */\r\n\r\n.keyboard {\r\n\tdisplay: inline-block;\r\n    font-size: 12px;\r\n\t/*box-shadow: 2px 2px 5px #888888;*/\r\n\tmargin: 20px;\r\n\ttext-align: center;\r\n\tfont-family: sans-serif;\r\n}\r\n\r\n/* KeyboardKey */\r\n\r\n/* Container */\r\n\r\n.keyboard-key-container {\r\n\tdisplay: inline-block;\r\n\theight: 100px;\r\n}\r\n\r\n.keyboard-key-container-black {\r\n\twidth: 0px;\r\n}\r\n\r\n/* Key */\r\n\r\n.keyboard-key {\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n\tbox-shadow:inset 0px 0px 0px 1px black;\r\n\tposition: relative;\r\n}\r\n\r\n.keyboard-key-container-white .keyboard-key {\r\n\theight: 100px;\r\n\twidth: 25px;\r\n}\r\n\r\n.keyboard-key-container-black .keyboard-key {\r\n\theight: 70px;\r\n\twidth: 12px;\r\n\tposition: relative;\r\n\tleft: -6px;\r\n\tz-index: 10;\r\n}\r\n\r\n/* Label */\r\n\r\n.keyboard-key-label {\r\n\tposition: absolute;\r\n\twidth: 25px;\r\n\theight: 25px;\r\n    line-height: 25px;\r\n}\r\n\r\n.keyboard-key-container-white .keyboard-key-label {\r\n\tbottom: 2px;\r\n\tleft: 0px;\r\n}\r\n\r\n.keyboard-key-container-black .keyboard-key-label {\r\n\ttop: -25px;\r\n\tleft: -6px;\r\n\tcolor: black;\r\n}\r\n\r\n/* Colors */\r\n\r\n.black {\r\n\tbackground-color: black;\r\n\tcolor: white;\r\n}\r\n\r\n.white {\r\n\tbackground-color: white;\r\n\tcolor: black;\r\n}",""])},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=t(2),o=t(4);var i;!function(e){e[e.Black=0]="Black",e[e.White=1]="White"}(i=n.KeyboardKeyType||(n.KeyboardKeyType={})),n.KeyboardKey=function(e){let n=e.type===i.White?"white":"black",t=["keyboard-key",null!==e.note.interval?`degree-${e.note.interval.degree}`:n];return r.createElement("div",{className:`keyboard-key-container keyboard-key-container-${n}`},r.createElement("div",{className:t.join(" ")},r.createElement("div",{className:"keyboard-key-label"},o.TheoryEngine.getNoteLabel(e.note,e.keyLabel))))}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=t(2);n.ErrorBoundary=class extends r.Component{constructor(e){super(e),this.state={error:null,errorInfo:null}}componentDidCatch(e,n){console.error(e,n),this.setState({error:e,errorInfo:n})}render(){return this.state.errorInfo?r.createElement("div",{className:"error-boundary"},"Sorry, something went wrong."):this.props.children}}}]);