(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9103:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),i=r(9008),a=r(4298),o=r(7294),s=r(4476),p=r.n(s),m=JSON.parse('{"openapi":"3.0.0","info":{"title":"Railways","version":"1.0.0"},"servers":[{"url":"https://indian-railway.vercel.app"}],"tags":[{"name":"Auth","description":"Authenticate to application"},{"name":"Train","description":"Access the train information"}],"paths":{"/api/login":{"post":{"tags":["Auth"],"summary":"Login","description":"Login though basic auth and get access_token.","requestBody":{"content":{}},"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/inline_response_200"},"example":{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxOTgyNzIzMi00OWZkLTQwZmYtYjQyYy03MmViZWRhMDZmMDAiLCJuYW1lIjoiSm9zZXBoIEQuIFdyaWdodCIsImdpdmVuX25hbWUiOiJKb3NlcGgiL.jlEYXg0nxMJe7i6nACOutLfKBna6voyI-udqB5w34p0","token_type":"Bearer","expires_in":3600}}}},"400":{"description":"Username or Password not provided."},"401":{"description":"Invalid username or password."},"500":{"description":"Internal server error"}},"security":[{"basicAuth":[]}]}},"/api/trains":{"get":{"tags":["Train"],"summary":"List Trains","description":"Get the list of trains based on specified filters.","parameters":[{"name":"type","in":"query","required":false,"style":"form","explode":true,"schema":{"type":"string"},"example":"SF"},{"name":"page","in":"query","required":false,"style":"form","explode":true,"schema":{"type":"integer"},"example":"1"}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/inline_response_200_1"}}}},"400":{"description":"Token error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/TokenError"}}}},"403":{"description":"Forbidden | Not authorized to perform action"},"500":{"description":"Internal server error"}},"security":[{"bearerAuth":[]}]}},"/api/trains/{trainNumber}":{"get":{"tags":["Train"],"summary":"Get Train by Train Number","description":"Get the full detail of a train along with geo coordinates of its track.","parameters":[{"name":"trainNumber","in":"path","description":"Train Number","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/TrainInfo"}}}},"400":{"description":"Token error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/TokenError"}}}},"403":{"description":"Forbidden | Not authorized to perform action"},"500":{"description":"Internal server error"}},"security":[{"bearerAuth":[]}]}},"/api/trains/types":{"get":{"tags":["Train"],"summary":"Get Types of Trains","description":"Get the list of train types supported/available in this platform.","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/TrainType"}}}}},"400":{"description":"Token error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/TokenError"}}}},"403":{"description":"Forbidden | Not authorized to perform action"},"500":{"description":"Internal server error"}},"security":[{"bearerAuth":[]}]}}},"components":{"schemas":{"TrainType":{"type":"object","properties":{"Code":{"type":"string","example":"SF"},"Name":{"type":"string","example":"SuperFast"}}},"Train":{"type":"object","properties":{"name":{"type":"string","example":"Mumbai BandraT-Bikaner SF Special"},"number":{"type":"string","format":"int","example":"04728"},"from_station_name":{"type":"string","example":"MUMBAI BANDRA TERMINUS"},"to_station_ name":{"type":"string","example":"BIKANER JN"},"type":{"type":"string","example":"SF"}}},"TrainInfo":{"type":"object","properties":{"type":{"type":"string","example":"Feature"},"properties":{"$ref":"#/components/schemas/TrainInfo_properties"}}},"TokenError":{"required":["message","name"],"type":"object","properties":{"name":{"type":"string"},"message":{"type":"string"},"expiredAt":{"type":"number","format":"date"},"date":{"type":"string","format":"date"}}},"inline_response_200":{"type":"object","properties":{"access_token":{"type":"string"},"token_type":{"type":"string"},"expires_in":{"type":"number"}}},"inline_response_200_1":{"type":"object","properties":{"page":{"type":"number","example":1},"perPage":{"type":"number","example":10},"total":{"type":"number","example":800},"result":{"type":"array","items":{"$ref":"#/components/schemas/Train"}}}},"TrainInfo_properties_geometry":{"type":"object","properties":{"type":{"type":"string","example":"LineString"},"coordinates":{"type":"array","items":{"type":"array","example":[72.840535,75.5782],"items":{"type":"number"}}}}},"TrainInfo_properties":{"type":"object","properties":{"third_ac":{"type":"boolean","example":true},"arrival":{"type":"string","format":"time","example":"12:30:00"},"from_station_code":{"type":"string","example":"BDTS"},"name":{"type":"string","example":"Mumbai BandraT-Bikaner SF Special"},"zone":{"type":"string","example":"NWR"},"chair_car":{"type":"boolean","example":false},"first_class":{"type":"boolean","example":false},"duration_m":{"type":"string","example":"55"},"sleeper":{"type":"boolean","example":true},"from_station_name":{"type":"string","example":"MUMBAI BANDRA TERMINUS"},"number":{"type":"string","format":"number","example":"04728"},"departure":{"type":"string","format":"time","example":"14:35:00"},"return_train":{"type":"string","format":"number","example":"04727"},"to_station_code":{"type":"string","example":"BKN"},"second_ac":{"type":"boolean","example":true},"classes":{"type":"string","example":""},"to_station_name":{"type":"string","example":"BIKANER JN"},"duration_h":{"type":"number","example":21},"type":{"type":"string","example":"SF"},"first_ac":{"type":"boolean","example":false},"distance":{"type":"number","example":1212},"geometry":{"$ref":"#/components/schemas/TrainInfo_properties_geometry"}}}},"securitySchemes":{"basicAuth":{"type":"http","scheme":"basic"},"bearerAuth":{"type":"http","scheme":"bearer"}}}}');function c(){return(0,o.useEffect)((function(){document.getElementById("thedoc").loadSpec(m)}),[]),(0,n.jsxs)("div",{className:p().container,children:[(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:"[NOT] Indian Railway | Assignment API"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(a.default,{src:"https://unpkg.com/rapidoc/dist/rapidoc-min.js",strategy:"beforeInteractive"}),(0,n.jsx)("rapi-doc",{id:"thedoc",theme:"light","primary-color":"#AC3931","nav-bg-color":"#482C3D","allow-spec-url-load":!1,"allow-spec-file-load":!1,"show-header":!1,"allow-try":!1})]})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9103)}])},4476:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},9008:function(e,t,r){e.exports=r(639)},4298:function(e,t,r){e.exports=r(7926)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);