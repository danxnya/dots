"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7288],{82153:(e,t,a)=>{a.d(t,{T:()=>g});var s=a(59496),n=a(84875),r=a.n(n),i=a(85903),o=a(99302),c=a(56182),l=a(6567);const d="pvGZ831aNzHTQMZ8CA_u";var m=a(4637);const g=(0,s.memo)((function({onClick:e=(()=>{}),size:t,className:a,uri:n,sharingInfo:g,interactionData:h,ariaLabel:u=o.ag.get("mwp.list.item.share")}){const{onCopyLink:p}=(0,l.y)({sharingInfo:g,uri:n,interactionData:h}),f=(0,s.useCallback)((()=>{p(),e()}),[e,p]);return(0,m.jsx)(c.E,{ariaLabel:u,size:t,onClick:f,className:r()(d,a),icon:i.M,condensed:!0})}))},35372:(e,t,a)=>{a.d(t,{Z:()=>k});var s=a(59496),n=a(51005),r=a(28162),i=a(99302),o=a(91608),c=a(50465),l=a(9024),d=a(17642),m=a(51089),g=a(13261);const h="MUiWCNTfb6FcSwVPvQ1V",u="UAk3bMhekwJTV_wIyfsT",p="X9w6LPfKsZHMCs38sVIQ",f="NXn5KjeUOjLGlAfS1Gao",x="N0wgFMDDvCiby4QB5kLJ",v="nloNe2BLRHjz9dxlwfLU",j="FyD0hF1e2PKzRxQ6sYDQ",y="JzXND83mXvcEuntCNR34",w="GR08E4L_rOGljyQQX30R";var N=a(4637);const k=(0,s.memo)((e=>{const{concert:t,isVirtual:a,onClick:s}=e,{venue:k,location:D}=t,b=t.artists[0],C=(0,m.CH)(t.startDate.localDate);return(0,N.jsxs)(o.Link,{to:`/concert/${t.id}`,className:h,"data-testid":"concert-card",onClick:s,children:[b.imageUri&&(0,N.jsx)(c.Z,{children:(0,N.jsx)("div",{role:"img",className:w,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(6, 6, 6, 0.6) 60%, rgba(0, 0, 0, 0.7) 100%), url(${b.imageUri})`}})}),(0,N.jsx)("time",{className:u,dateTime:t.startDate.localDate,children:(0,N.jsx)(n.D,{as:"div",variant:"mestoBold",children:(0,m.jx)(C)})}),(0,N.jsxs)("div",{className:p,dir:"auto",children:[(0,N.jsxs)(n.D,{as:"p",className:y,variant:"mesto",children:[(0,l.FO)(C)," • ",(0,m.hK)(C)]}),(0,N.jsx)(n.D,{as:"h2",variant:"cello",weight:"bold",className:f,children:(0,g.ij)(t)}),(0,N.jsxs)("div",{className:x,children:[(0,d.$R)(t)&&(0,N.jsx)("span",{className:j,children:(0,N.jsx)(r.V,{iconSize:16})}),(0,N.jsx)(n.D,{as:"span",className:v,variant:"mesto","data-testid":"location-name",children:a?k:[k,D].join(i.ag.getSeparator())})]})]})]})}))},17642:(e,t,a)=>{a.d(t,{$R:()=>c,DF:()=>g,Vv:()=>d,ie:()=>h,k9:()=>o,pm:()=>m,sk:()=>l,yI:()=>r});var s=a(85487),n=a(67898);const r=(e,t)=>{if(!e)return"/concerts";const a=t?.normalize().replaceAll(/\W+/g,"-");return a?`/concerts/location/${e}-${a}`:`/concerts/location/${e}`},i=10;function o(e){if(0===e.length)return[];if(0===e[0].events.length)return[];const t=[];let a={date:e[0].events[0].openingDate.slice(0,i),events:[]};for(const s of e)for(const e of s.events){const s=e.openingDate.slice(0,i);a.date!==s&&(t.push(a),a={date:s,events:[]}),a.events.push(e)}return t.push(a),t}const c=e=>e.ticketers.some((e=>"spotify"===e.partnerDisplayName.toLowerCase())),l=e=>e.concerts.some((({concert:e})=>c(e))),d=e=>{const t=new Date(e);t.setDate(e.getDate()+(6-e.getDay()));const a=new Date(t);return a.setDate(t.getDate()+1),{from:t,to:a}},m=e=>{const t=new Date(e);t.setDate(e.getDate()+(6-e.getDay()));const a=new Date(t);a.setDate(t.getDate()+7);const s=new Date(a);return s.setDate(a.getDate()+1),{from:a,to:s}},g=(e,t)=>!!(e?.from&&e?.to&&t?.from&&t?.to)&&((0,s.Z)(e.from,t.from)&&(0,s.Z)(e.to,t.to)),h=e=>(0,n.Z)(e,{representation:"date"})},64396:(e,t,a)=>{a.r(t),a.d(t,{default:()=>nt});var s=a(9102),n=a(55411),r=a(13841),i=a(99302),o=a(68368),c=a(31427),l=a(7886);const d=e=>{const[t,{username:a,concertUri:s}]=e.queryKey;return(async(e,t)=>{const a=await(0,l.A0)(c.b.getInstance(),e,t);return a.body?.found[0]})(a,s)};var m=a(31234),g=a(59496),h=a(51005),u=a(35647),p=a(32706),f=a(752),x=a(57014),v=a(31267),j=a(82289),y=a(38730),w=a(25672),N=a(92499),k=a(84875),D=a.n(k),b=a(7215),C=a(47831),_=a(94566),I=a(74834),S=a(67866),L=a(82153),P=a(66097),U=a(6721),M=a(29328),T=a(57525),A=a(72390),R=a(4637);const F=g.memo((function({uri:e}){const{spec:t}=(0,M.T)(e);return(0,R.jsx)(U.ZP,{value:"concert",children:(0,R.jsxs)(P.v,{children:[(0,R.jsx)(T.q,{children:(0,R.jsx)(A.Jx,{spec:t,uri:e,displayText:i.ag.get("context-menu.copy-concert-link")})}),(0,R.jsx)(A.h$,{spec:t,uri:e})]})})}));var K=a(91608),E=a(20002),$=a(6188),z=a(88742);const V="Qy5TW6J4tm8_aomy4Shi",H=(0,g.memo)((e=>{const{spec:t,logger:a}=(0,N.fU)(E.w,{}),s=(0,z.a4)(e.followers,((e,s)=>{a.logInteraction(t.planMemberFactory({uri:e,identifier:s}).hitUiNavigate({destination:e}))}));return(0,R.jsxs)("div",{className:V,children:[(0,R.jsx)($.D,{followers:e.followers,spec:t}),(0,R.jsx)(h.D,{as:"p",variant:"mesto",children:s})]})}));var W=a(3893),Q=a(41432),B=a(12929),O=a(8804),Z=a(76285),q=a(51089),Y=a(47570),G=a(51356),J=a(44858),X=a(33660);const ee="rvw6x7R5AiAT48dSkFl9",te="JRuVlk6wpKk6ok7zuW6l",ae="YpfopxY2udneDY34uzRN",se="KI_0F1jtTR5tWgl7gZ1E",ne="gKtc3TdowDTXBaVESi1D",re="V8TIr8yJq4tYZfPEzm12",ie="rWFRSaU8daVvtbWEjvp7",oe="VvL91cIRcCi1hJh0K845",ce="vKcnOO1GNYoLKHg4T4lK",le="LdW0YNvo_Y77hgqhL4zY",de="cTkykhjfHxkEGKbxSxXw",me="XgeTnLs82tTjczDR6oKn",ge="P3fE7wn6Tqnibn3gljKV",he="b3qjYcKXwrvfkQkOLMhZ",ue="A8LG_5Dvp7IiXDtdR571",pe="O0PSSw8ttrMn9lzq_L16",fe="D_ffrfn62aOgZKOFfZVr",xe="OH4mOZCual2ejIodzIkL",ve="se_ixDV6hBf7lve861oU",je="YDAJHPP5lDmg71SdvJZC",ye="lKQxSRsi8KcoYx5D7mjh",we="LUMel_X4gQK0J1i6X0sC",Ne="s1jEHgfOLzeY3WugmaoT",ke="eIA_y6wnyKS7F4BkMraV",De="CKbduoHBINBakBcguVzi",be="oCmeNmHdfNzMD6n4mSqw",Ce="l6M4kfGer7xxBaIPco5p",_e="r5hQwOq0RGo1ptvIthJ0",Ie="HRKlEfCQE6VjdRRg0NRf",Se="GWAqJBkan0flx0gBI92h",Le="YDoK0ksaHmDfScvMhW4l",Pe=(0,g.memo)((e=>{const{concertUri:t,position:a,ticketer:s,onRemindMeClick:n,spec:r,isPartnerLink:o}=e,c=(0,N.$P)(),l=(0,Y.o)(),d=(0,g.useMemo)((()=>r.ticketProviderCellFactory({identifier:s.partnerDisplayName,position:a,uri:s.url})),[r,s.partnerDisplayName,a,s.url]),m=(0,N.Wi)(d),u=(0,I.W6)(X.he),p=!!s.endDate&&(s.soldOut||(0,q.OF)(s.endDate?.localDate)),f={"on-sale":i.ag.get("concerts.on_sale"),presale:i.ag.get("concerts.presale")},x=!!s.startDate?.localDate&&(0,q.ek)(s.startDate.localDate),v=s.startDate?.localDate?(0,q.CH)(s.startDate.localDate):"",j=!x&&s.url,y=()=>{const e=d.hitNavigateToExternalUri({destination:o&&s.partnerURL?s.partnerURL:s.url});c.logInteraction(e),l({targetUri:t,intent:"find-concert",type:"click"})};return(0,R.jsx)(R.Fragment,{children:u&&o?(0,R.jsxs)(K.default,{to:s.partnerURL,className:me,onClick:y,ref:m,children:[(0,R.jsx)("div",{className:ge,children:(0,R.jsx)(O.i,{className:ue,iconSize:24})}),(0,R.jsxs)("div",{className:pe,children:[(0,R.jsx)("div",{dir:"auto",className:Ce,children:(0,R.jsx)(h.D.p,{variant:"cello",semanticColor:"textPositive",className:be,children:i.ag.get("concerts.on_sale")})}),(0,R.jsx)(Z.D,{className:ke,iconTrailing:G.h,size:"small",children:i.ag.get("concert_find_tickets")})]})]},s.partnerURL):(0,R.jsxs)(K.default,{to:j,className:me,onClick:y,ref:m,children:[(0,R.jsx)("div",{className:ge,children:(0,R.jsx)(J.Ee,{loading:"eager",srcSet:s.imageURL,src:s.imageURL,height:"100%",width:"100%",className:he,children:(0,R.jsx)(O.i,{className:ue,iconSize:24})})}),(0,R.jsxs)("div",{className:pe,children:[(0,R.jsxs)("div",{dir:"auto",className:Ce,children:[u&&s.type&&f[s.type]&&!p&&!x&&(0,R.jsx)(h.D.p,{variant:"cello",semanticColor:"textPositive",className:be,children:f[s.type]}),u&&!p&&x&&(0,R.jsx)(h.D.p,{variant:"cello",semanticColor:"textPositive",className:be,children:i.ag.get("concerts.tickets_on_sale_soon")}),u&&"Spotify"===s.partnerDisplayName&&s.minPrice&&!p&&!x&&(0,R.jsx)(h.D.p,{variant:"cello",semanticColor:"textPositive",className:De,children:i.ag.get("concerts.ticket_price",s.minPrice)}),u&&!p&&x&&v&&(0,R.jsx)(h.D.p,{variant:"cello",semanticColor:"textPositive",className:Se,children:i.ag.get("concerts.ticket_date_time",(0,q.xE)(v),(0,q.hK)(v))}),u&&p&&(0,R.jsx)(h.D.p,{variant:"cello",semanticColor:"textSubdued",className:_e,children:i.ag.get("concerts.soldout")}),(0,R.jsx)(h.D.p,{semanticColor:"textSubdued",children:s.partnerDisplayName})]}),(!u||!p)&&!x&&(0,R.jsx)(Z.D,{className:ke,iconTrailing:G.h,size:"small",children:u&&"Spotify"===s.partnerDisplayName?i.ag.get("concert_buy_tickets"):i.ag.get("concert_find_tickets")}),u&&!p&&x&&(0,R.jsx)(Z.D,{className:ke,size:"small",onClick:()=>{n()},children:i.ag.get("concerts.remind_me")})]})]},s.url)})})),Ue=(0,g.memo)((e=>{const{concert:t,onClick:a}=e,{category:s,venue:n,location:r,lat:i,lon:o}=t;if("ONLINE"===s)return(0,R.jsx)(h.D,{as:"h3",variant:"canon",children:n});const c=new URL("https://maps.google.com/");return c.searchParams.set("q",`${n},${r}`),c.searchParams.set("ll",`${i},${o}`),(0,R.jsx)(K.default,{to:c.href,target:"_blank",onClick:()=>a(c.href),children:(0,R.jsxs)(h.D,{as:"h3",variant:"canon",children:[n,", ",r]})})})),Me=(0,g.memo)((e=>{const{concert:t,ticketAvailabilityTranslated:a,entitySpec:s,isConcertSaved:n,isAnonymous:r,onInterestedClick:o,followers:d}=e,m=(0,q.CH)(t.date),u=`spotify:concert:${t.id}`,p=(0,g.useMemo)((()=>s.ticketProviderListFactory()),[s]),f=(0,N.$P)(),x=(0,N.Wi)(p),v=(0,g.useMemo)((()=>s.interestedButtonFactory()),[s]),j=(0,N.Wi)(v),y=(0,g.useMemo)((()=>s.shareEventButtonFactory({uri:u})),[s,u]),w=(0,N.Wi)(y),[k,P]=(0,g.useState)(n),U=(0,I.W6)(W.tpg),M=(0,I.W6)(W.JYF),T=1===t.ticketers.length&&"Spotify"===t.ticketers[0].partnerDisplayName,A=!!t.ticketers[0].endDate&&(t.ticketers[0].soldOut||(0,q.OF)(t.ticketers[0].endDate?.localDate)),E=T&&A&&t.ticketers[0].partnerURL;if(0===t.ticketers.length)return null;if((0,q.OF)(t.date))return(0,R.jsxs)("div",{className:le,children:[(0,R.jsx)(h.D,{as:"h3",variant:"canon",children:i.ag.get("concert_event_ended")}),(0,R.jsx)(h.D,{variant:"ballad",children:(0,R.jsx)(K.default,{to:"spotify:concerts",children:i.ag.get("concert_past_message")})})]});const $=()=>{const e=v.hitUiElementToggle();f.logInteraction(e),(0,l.l7)(c.b.getInstance(),t.id),o(!0,i.ag.get("concerts_added-to-your-saved-events")),f.logInteraction(v.hitAddInterest()),P(!0)};return(0,R.jsxs)("div",{className:le,ref:x,children:[(0,R.jsx)(h.D,{as:"h3",variant:"canon",className:Ie,children:(0,R.jsx)(Ue,{concert:t,onClick:e=>{const t=s.venueMapLinkFactory().hitNavigateToExternalUri({destination:e});f.logInteraction(t)}})}),(0,R.jsxs)(h.D,{as:"h3",variant:"mesto",className:je,children:[(0,q.xE)(m)," • ",(0,q.hK)(m)]}),d&&d.length>0&&(0,R.jsx)(N.Nh,{spec:s,children:(0,R.jsx)(H,{followers:d})}),a&&(0,R.jsx)(h.D,{as:"h3",className:ce,variant:"mesto",children:a}),(0,R.jsxs)("div",{className:te,children:[!r&&U&&(0,R.jsx)(B.ws,{label:i.ag.get("concerts_interested_tooltip"),placement:"top-end",children:(0,R.jsx)(b.P,{buttonSize:"sm",iconLeading:k?C.N:_.S,className:D()(we,{[ee]:k}),onClick:()=>{const e=v.hitUiElementToggle();f.logInteraction(e),k?((0,l.FB)(c.b.getInstance(),t.id),o(!0,i.ag.get("concerts_removed-from-your-saved-events")),f.logInteraction(v.hitRemoveInterest())):((0,l.l7)(c.b.getInstance(),t.id),o(!0,i.ag.get("concerts_added-to-your-saved-events")),f.logInteraction(v.hitAddInterest())),P(!k)},ref:j,children:i.ag.get("concerts_interested")})}),M&&(0,R.jsx)("div",{ref:w,children:(0,R.jsx)(L.T,{uri:u,sharingInfo:null,interactionData:{intent:"share",type:"click"},onClick:()=>{f.logInteraction(s.shareEventButtonFactory({uri:u}).hitShare({entityToBeShared:u,shareId:t.id}))},className:Le,ariaLabel:i.ag.get("concerts_share_with_friends")})}),(0,R.jsx)(Q.ClickToggleContextMenu,{menu:(0,R.jsx)(F,{uri:u}),onShow:()=>{const e=s.contextMenuButtonFactory().hitUiReveal();f.logInteraction(e)},children:(0,R.jsx)(S.MoreButton,{size:S.q.md})})]}),(0,R.jsx)(h.D.h3,{variant:"canon",children:i.ag.get("concert.header.available_tickets_from")}),(0,R.jsxs)("div",{className:de,children:[t.ticketers.map(((e,t)=>(0,R.jsx)(Pe,{concertUri:u,ticketer:e,position:t,spec:p,onRemindMeClick:$,isPartnerLink:!1},t))),E&&t.ticketers[0]?.partnerURL&&(0,R.jsx)(Pe,{concertUri:t.ticketers[0].partnerURL,ticketer:t.ticketers[0],position:1,spec:p,onRemindMeClick:$,isPartnerLink:!0},1)]})]})}));var Te=a(13234),Ae=a(54745),Re=a(68626),Fe=a(50465);const Ke="bnxKFmECExdcmyBXx9f_",Ee="UrPgHWUndGwAWPfONuwd",$e="pF2W693VDIpPdVTVCsDg",ze="YGVuy3Qzaam0CJPc_s4K",Ve="r5Kj2xQVLHK0hf_J00US",He="qCN2f5PHVrzAPLvQ0lNc",We=(0,g.memo)((e=>{const{entity:t,headliner:a,onClick:s}=e,{imageUri:n,name:r,uri:o}=t;return(0,R.jsxs)(K.Link,{to:o,className:Ke,onClick:s,children:[n?(0,R.jsx)(Fe.Z,{children:(0,R.jsx)("div",{"data-testid":"image-container",className:He,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50.52%, rgba(18, 18, 18, 0.7) 100%), url(${n})`}})}):null,(0,R.jsxs)("div",{className:Ee,children:[a&&(0,R.jsx)("div",{className:ze,children:(0,R.jsx)(h.D,{as:"h4",variant:"mestoBold",className:Ve,weight:"bold",children:i.ag.get("concert.label.headliner")})}),(0,R.jsx)(h.D,{as:"h2",variant:"alto",className:$e,children:r})]})]})})),Qe=We,Be=(0,g.memo)((e=>{const{artist:t,albums:a,position:s,lineupArtistsSpec:n}=e,r=(0,g.useMemo)((()=>n.artistRowFactory({position:s,uri:t.uri})),[n,s,t.uri]),o=(0,N.$P)(),c=0===s,l=`${(0,Re.GJ)(t.id)}:discography`;return(0,R.jsx)(U.ZP,{value:"headered-grid",index:s,children:(0,R.jsx)(N.Nh,{spec:r||null,children:(0,R.jsx)(Ae.P,{title:c?i.ag.get("concert_lineup"):"",total:a.length+2,seeAllUri:l,seeAllLabel:i.ag.get("artist-page.show-discography"),onClickShelfSeeAll:()=>{const e=r.seeDiscographyLinkFactory().hitUiNavigate({destination:l});o.logInteraction(e)},children:[(0,R.jsx)(Qe,{entity:t,headliner:c,onClick:()=>{const e=r.artistCardFactory().hitUiNavigate({destination:t.uri});o.logInteraction(e)}},`ConcertArtistCard-${t.id}`),null,...a.map(((e,a)=>(0,R.jsx)(Te.r,{index:a,artists:[{uri:t.uri,name:t.name}],images:[{url:e.imageUri,width:100,height:100}],name:e.name,uri:e.uri,sharingInfo:null},e.uri)))]})})},t.uri)})),Oe=(0,g.memo)((e=>{const{albums:t,artists:a,entitySpec:s}=e,n=(0,g.useMemo)((()=>s.lineupArtistsFactory()),[s]),r=(0,N.Wi)(n),i=(0,g.useMemo)((()=>{const e={};return t.forEach((t=>{const a=t.artistName;e[a]?e[a].push(t):e[a]=[t]})),e}),[t]);return(0,R.jsx)("div",{className:fe,ref:r,"data-testid":"concert-lineup",children:a.map(((e,t)=>(0,R.jsx)(Be,{artist:e,albums:i[e.name]||[],position:t,lineupArtistsSpec:n},e.uri)))})})),Ze="y4xsX4QR_wfM40vOhsQ4",qe="TPdGbM0PhSqxmhkxP9n2",Ye="y33j8HV43EGq3BPkZrLA",Ge=(0,g.memo)((e=>(0,R.jsxs)(K.Link,{to:"spotify:concerts",className:Ze,onClick:e.onClick,children:[(0,R.jsx)(Fe.Z,{children:(0,R.jsx)("div",{className:Ye,style:{backgroundImage:"linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50.52%, rgba(18, 18, 18, 0.7) 100%), url(https://concerts.spotifycdn.com/ConcertHubCard.png)"}})}),(0,R.jsx)("div",{className:qe,children:(0,R.jsx)(h.D,{as:"h2",variant:"canon",children:i.ag.get("concerts_browse_more")})})]})));var Je=a(35372);const Xe=(0,g.memo)((e=>{const t=(0,g.useMemo)((()=>e.entitySpec.recommendedConcertsFactory()),[e.entitySpec]),a=(0,N.$P)(),s=(0,N.Wi)(t),n=e.upcomingConcerts;if(!n||n.length<1)return null;const r=n.map(((e,s)=>{const n=`spotify:concert:${e.concert.id}`;return(0,R.jsx)(Je.Z,{concert:e.concert,onClick:()=>{const e=t.concertCardFactory({position:s,uri:n}).hitUiNavigate({destination:n});a.logInteraction(e)}},e.concert.id)}));return(0,R.jsx)("div",{className:ve,ref:s,"data-testid":"concert-recommendations",children:(0,R.jsx)(U.ZP,{value:"headered-grid",children:(0,R.jsxs)(Ae.P,{title:i.ag.get("concerts_more_events"),total:n.length+1,className:ye,showSeeAll:!0,seeAllUri:"spotify:concerts",seeAllLabel:i.ag.get("view.see-all"),children:[(0,R.jsx)(Ge,{onClick:()=>{const e=t.browseCardFactory().hitUiNavigate({destination:"spotify:concerts"});a.logInteraction(e)}}),r]})})})}));var et=a(13261);const tt=(0,g.memo)((e=>{const{data:t,isAnonymous:a,isConcertSaved:s,followers:n}=e,{artists:r,albums:o,upcomingConcerts:c}=t,l=t.concert.concert,[d,m]=(0,g.useState)(!1),[k,D]=(0,g.useState)(""),{spec:b}=(0,N.fU)(p.q,{data:{identifier:l.id,uri:`spotify:concert:${l.id}`}});return(0,w.Y)(t.color),(0,R.jsxs)("section",{className:re,children:[(0,R.jsx)(x.$,{children:i.ag.get("concert.entity_metadata.title",l.title,l.location,l.venue)}),(0,R.jsxs)(v.gF,{backgroundImages:[{url:t.headerImageUri,width:100,height:100}],backgroundColor:t.color,children:[(0,R.jsxs)(v.sP,{children:[(0,R.jsx)(v.T0,{children:(0,R.jsx)("div",{className:ae,children:(0,R.jsx)(h.D,{as:"h3",variant:"canon",className:se,children:(0,q.jx)((0,q.CH)(l.date))})})}),(0,R.jsx)(v.xd,{className:ie,children:(0,et.Yl)(l)})]}),(0,R.jsx)(j.W,{children:(0,R.jsx)("div",{className:xe,children:(0,R.jsx)(y.i,{text:(0,et.Yl)(l)})})})]}),(0,R.jsxs)("div",{className:ne,children:[(0,R.jsx)(f.I,{backgroundColor:t.color}),(0,R.jsxs)("div",{className:oe,children:[(0,R.jsx)(Me,{onInterestedClick:(e,t)=>{m(e),D(t),setTimeout((()=>m(!1)),1e4)},concert:l,ticketAvailabilityTranslated:t.ticketAvailabilityTranslated,entitySpec:b,isAnonymous:a,isConcertSaved:s,followers:n}),(0,R.jsx)(Oe,{artists:r,albums:o,entitySpec:b}),(0,R.jsx)(Xe,{upcomingConcerts:c,entitySpec:b})]})]}),d&&(0,R.jsx)(u.A9,{colorSet:"invertedLight",className:Ne,children:k})]})}));var at=a(93530);const st=async e=>{const[t,a]=e.queryKey;return(await(0,l.gq)(c.b.getInstance(),a)).body},nt=()=>{const{concertId:e=""}=(0,r.UO)(),{data:t,isLoading:a}=(0,s.useQuery)(["concert",e],st,{staleTime:6e5}),c=(e=>{const t=["concertInCollection",e];return(0,s.useQuery)(t,d,{keepPreviousData:!1,retry:!1})})({username:(0,n.v9)(m.n5),concertUri:`spotify:concert:${e}`}),l=c?.data||!1,{isAnonymous:g}=(0,n.v9)(m.Gg),h=t?.artists.map((e=>e.uri));var u;u={artists:h},(0,s.useQuery)(["family-duo-concert-followers-aa-test",u],at.g,{enabled:(0,I.W6)(W.hjm)});const{data:p,isLoading:f}=(e=>(0,s.useQuery)(["family-duo-concert-followers",e],at.g,{enabled:(0,I.W6)(W.YCf),retry:!1}))({artists:h});return a||f?(0,R.jsx)(o.h,{hasError:!1,errorMessage:""}):t?(0,R.jsx)(tt,{data:t,isAnonymous:g,isConcertSaved:l,followers:p?.followers}):(0,R.jsx)(o.h,{hasError:!0,errorMessage:i.ag.get("concert.error.concert_not_found_title")})}},93530:(e,t,a)=>{a.d(t,{g:()=>i,P:()=>r});var s=a(31427),n=a(3152);const r=async e=>{const[t,{geonameId:a}]=e.queryKey,r=await((e,t)=>e.build().withMethod("GET").withHost(n.gH).withPath("/concerts/").withEndpointIdentifier("/cooper/concerts").withQueryParameters({...t&&{geonameId:t}}).withoutMarket().send())(s.b.getInstance(),a);return r.body},i=async e=>{const[t,{artists:a}]=e.queryKey,r=await((e,t)=>e.build().withMethod("POST").withHost(n.gH).withPath("/followers/").withEndpointIdentifier("/cooper/followers").withHeaders([{key:"content-type",value:"application/json"},{key:"accept",value:"application/json"}]).withBody(JSON.stringify({artists:t})).withoutMarket().send())(s.b.getInstance(),a);return r.body}},6188:(e,t,a)=>{a.d(t,{D:()=>d});var s=a(59496),n=a(92499);const r="g4AhdK8faqTe7v8VqC3x";var i=a(4637);const o=(0,s.memo)((({alt:e})=>(0,i.jsxs)("svg",{height:8,width:8,"aria-hidden":"true",viewBox:"-8 -8 32 32",className:r,children:[(0,i.jsx)("title",{children:e}),(0,i.jsx)("path",{d:"M6.233.371a4.388 4.388 0 0 1 5.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 0 0 .201 1.13l2.209 1.275a4.75 4.75 0 0 1 2.375 4.114V16H.382v-1.143a4.75 4.75 0 0 1 2.375-4.113l2.209-1.275a.75.75 0 0 0 .201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 0 1 .904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 0 0-2.13.937 2.85 2.85 0 0 0-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 0 1-.603 3.39l-2.209 1.275A3.25 3.25 0 0 0 1.902 14.5h12.196a3.25 3.25 0 0 0-1.605-2.457l-2.209-1.275a2.25 2.25 0 0 1-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 0 0-.588-1.022A2.888 2.888 0 0 0 8 1.5z"})]}))),c="WCQhjx2ZwtN1mwka_4wj",l=e=>{const t=(0,n.$P)(),a=`spotify:user:${e.follower.username}`;return(0,s.useEffect)((()=>{t.logImpression(e.spec.planMemberFactory({identifier:e.follower.memberId,uri:a}).impression())})),e.follower.profileImageUrl?(0,i.jsx)("img",{src:e.follower.profileImageUrl,alt:e.follower.displayName??e.follower.username},`follower-${e.follower.displayName??e.follower.username}`):(0,i.jsx)(o,{alt:e.follower.displayName},`follower-${e.follower.displayName}`)},d=(0,s.memo)((e=>(0,i.jsx)("div",{className:c,children:e.followers.map(((t,a)=>(0,i.jsx)(l,{follower:t,spec:e.spec},`follower-${a}`)))})))},88742:(e,t,a)=>{a.d(t,{FV:()=>i,a4:()=>o,ij:()=>r});var s=a(99302),n=a(4637);const r=e=>{if((e=>!!e.title&&(e.festival||!e.artists.length))(e))return e.title;const t=(e=>e.artists.map((e=>e.name)))(e);return 1===t.length?s.ag.get("concert.header.upcoming_concert_title_1",...t):2===t.length?s.ag.get("concert.header.upcoming_concert_title_2",...t):3===t.length?s.ag.get("concert.header.upcoming_concert_title_3",...t):4===t.length?s.ag.get("concert.header.upcoming_concert_title_4",...t):t.length>4?s.ag.get("concert.header.upcoming_concert_title_more",...t):""},i=e=>1===e.length?s.ag.get("web-player.family-duo-concerts-shelf.X-follows",e[0].displayName??e[0].username):s.ag.get("web-player.family-duo-concerts-shelf.X-of-your-family-follow",e.length),o=(e,t)=>{const a=e.map(((e,a)=>{const s=`spotify:user:${e.username}`;return(0,n.jsx)("a",{onClick:()=>t(s,e.memberId),href:s,children:e.displayName??e.username},`follower-name-${a}`)}));return 1===e.length?s.ag.get("web-player.family-duo-concerts-shelf.X-follows",a[0]):2===e.length?s.ag.get("web-player.family-duo-concerts-shelf.2-follow",...a):3===e.length?s.ag.get("web-player.family-duo-concerts-shelf.3-follow",...a):4===e.length?s.ag.get("web-player.family-duo-concerts-shelf.4-follow",...a):s.ag.get("web-player.family-duo-concerts-shelf.5-follow",...a)}}}]);
//# sourceMappingURL=xpui-routes-concert.js.map