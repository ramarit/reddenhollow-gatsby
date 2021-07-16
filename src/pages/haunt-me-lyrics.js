// Step 1: Import your component
import * as React from 'react'
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import crow from "../images/crying-crow-black.svg"

// Step 2: Define your component
const LyricsPage = () => {
  return (
    <>
      <Helmet>
        <title>reddenhollow - lyrics</title>
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </Helmet>
    <main className="about-page">
        <div className="logo"><Link to="/"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" height="70" viewBox="0 0 2000 473.25"><title>reddenhollow</title><path d="M99.86,268.81q24.26-38,44.73-38,6.48,0,17,7.73c7,5.16,13.24,9.76,13.24,9.76l-19.33,23.59s-3.44-2.41-8.57-5.76q-9-6.27-17.1-6.27A27.85,27.85,0,0,0,108.61,269q-8.53,9.21-8.54,23V366.5q0,17.52,4.71,24.93t16.4,8.45l10.87.83c4.46.29,6.69,1.68,6.69,4.19,0,2.78-2,4.18-5.86,4.18q-1.47,0-9.85-1.05c-2.66-.28-6.56-.42-11.74-.42l-15.08-.21H87q-16.35,0-23.26,1.05c-3.63.55-6.15.9-7.54,1q-5.65.21-5.66-4.08,0-3.46,6.48-4.7,9-2.08,11.6-7.73t2.61-24V279.26q0-24-23-24l-7.11.21q-4.82,0-4.81-4.29,0-2.56,3.14-3.86a34.86,34.86,0,0,1,4.6-.63q19.64-1.87,46.4-18.39a13.36,13.36,0,0,1,4.81-1.67q4.81-.21,4.81,7.1l-.21,4Z"/><path d="M206.15,302.26l-.21,4.6q0,35.75,19.79,60.09t48.68,24.36q22.82,0,49.63-20.49a7.12,7.12,0,0,1,3.13-1.46q2.94-.21,2.94,3.33,0,6.24-14.63,17.68Q288.29,411.58,258,411.58q-34.08,0-57.17-25.89t-23.1-64.1q0-36.33,23.83-63.57t55.82-27.25q34.89,0,55.81,29a109.52,109.52,0,0,1,10.24,19.23q5.22,12.13,5.23,16.94,0,6.9-13.62,6.9l-15.49-.21-14.25-.42Zm1.26-11.5h70.86q16.5,0,16.51-6.69,0-16.31-14.11-30.31t-30.62-14q-17.15,0-28.54,13.69T207.41,290.76Z"/><path d="M614.42,302.26l-.21,4.6q0,35.75,19.78,60.09t48.69,24.36q22.83,0,49.63-20.49a7.06,7.06,0,0,1,3.14-1.46q2.92-.21,2.93,3.33,0,6.24-14.64,17.68-27.16,21.21-57.48,21.21-34.07,0-57.17-25.89T586,321.59q0-36.33,23.83-63.57t55.81-27.25q34.92,0,55.81,29a108.16,108.16,0,0,1,10.25,19.23q5.22,12.13,5.22,16.94,0,6.9-13.6,6.9l-15.5-.21-14.24-.42Zm1.25-11.5h70.87q16.5,0,16.51-6.69,0-16.31-14.11-30.31t-30.62-14q-17.15,0-28.53,13.69T615.67,290.76Z"/><path d="M804.54,264q28-33.23,58.11-33.23,33.45,0,52.89,27.41,13.38,18.85,13.38,57.35v50l-.21,6.28.63,10q2.29,13.81,17.56,16.12l8.78,1.25q5.64.83,5.85,4.08c.13,3-2.16,4.49-6.88,4.49a77.48,77.48,0,0,1-8.13-.71q-6.88-1-25.44-1l-20.64.63h-7.92l-6,.41-2.91-.64a3.41,3.41,0,0,1-1.47-3.22c0-2.14,1.26-3.51,3.77-4.08l6.27-1.67q8.36-2.08,8.36-15v-72q0-29-13.41-44.77T849,250a49.81,49.81,0,0,0-30.9,10.24q-13.51,10.25-13.52,23.41v79.79l.21,6.28.21,10.47q1,17.6,29.06,19.27,6.88.65,6.89,4.5c0,2.58-1.6,3.86-4.8,3.86a71.14,71.14,0,0,1-10.66-1.19q-4-.5-19.65-.48-33.24,0-39.72,1c-4.32.48-7.11.71-8.36.71-2.65,0-3.9-1.14-3.77-3.44q.21-2.58,4-4.08,10.65-3.76,14.32-9.19t3.65-17.53V279.23q0-14.82-3.55-20.14T759,253.76l-9,.21a6.49,6.49,0,0,1-3.34-.86,3,3,0,0,1-1.88-3c0-2,1.81-3.36,5.43-4.08a109.06,109.06,0,0,0,27-8.57L788.24,232q6.46-3.14,8.15-4a10.65,10.65,0,0,1,5-1.67c2.5,0,3.62,2,3.34,6.06q-.21,3.34-.21,7.94Z"/><path d="M1009.72,264q26.92-33.23,58.64-33.23,29.43,0,47.68,20.27t18.27,53.1V370.4q0,15.9,5.23,21.74t22.15,8.57q5.65.84,5.65,4.6t-5.65,3.77c-1.67,0-5.09-.21-10.24-.63q-15.46-1.05-26.55-1.05-18.4,0-27.17,1.12-5,.56-6.48.56c-3.76,0-5.72-1.29-5.85-3.87-.15-1.71,1.25-3.14,4.18-4.29q10.65-3.94,13.17-7.18t2.5-12.59l.21-6.46V305.37q0-26.44-13.56-41.95t-36.29-15.51a50.61,50.61,0,0,0-31.71,11q-14.17,11-14.18,24.58v81.05q0,21.35,4.81,27.64t23.41,8.79c4.74.69,7.11,2.38,7.11,5.11q0,3.47-4.61,3.46-2.31,0-11.53-.92-7.55-.75-31.85-.75-8.38,0-24.09,1.11c-4.62.38-7.82.56-9.64.56-3.36,0-5.1-1.08-5.24-3.26-.14-2.44,1.47-4.14,4.81-5.1q12.33-3.75,15.15-8.56t2.83-22.77V152.15q0-25.69-14-24.86l-10.66.63a6.33,6.33,0,0,1-2.93-.64,3,3,0,0,1-1.46-2.79q0-3,4.83-4.3A149.17,149.17,0,0,0,986,109.32l16.37-7.74a10.26,10.26,0,0,1,4.41-1.25q3.56,0,3.56,4.6c0,.83-.14,2.51-.42,5s-.21,5.93-.21,10.67Z"/><path d="M1255.79,230.77q37.62,0,64.59,26.41t27,62.95q0,39.67-26.55,65.56t-67.1,25.89q-39.73,0-65.33-25.16T1162.77,322q0-38,27.17-64.62T1255.79,230.77Zm-5.33,8.36q-26.07,0-42,19.33t-16,50.7q0,39.93,19.93,66.78t49.56,26.86q25.88,0,40.8-19t14.92-51.63q0-41.17-18.78-67.1T1250.46,239.13Z"/><path d="M1586.38,230.77q37.62,0,64.59,26.41t27,62.95q0,39.67-26.54,65.56t-67.1,25.89q-39.74,0-65.33-25.16T1493.35,322q0-38,27.18-64.62T1586.38,230.77Zm-5.33,8.36q-26.08,0-42,19.33t-16,50.7q0,39.93,19.93,66.78t49.56,26.86q25.88,0,40.8-19t14.92-51.63q0-41.17-18.79-67.1T1581.05,239.13Z"/><path d="M1777.43,375.21,1818.49,291l-4.06-10.55q-7.52-20.24-12.44-26.68t-14.31-9c-3.49-.82-5.23-2.24-5.23-4.29q0-4.48,6.71-4.49a84.66,84.66,0,0,1,8.8.72,192.84,192.84,0,0,0,22.43,1,245.44,245.44,0,0,0,24.53-1.2c3.35-.32,5.51-.48,6.5-.48,4.32,0,6.49,1.3,6.49,3.88s-1.46,4-4.39,4.69L1847,246q-8.37,1.89-8.36,12.38,0,4.6,4.6,16.77l37.21,98.15,22-51.3,8.36-19.26q10.44-23.86,10.45-39.57a17.85,17.85,0,0,0-5.22-13.3,18.36,18.36,0,0,0-13.38-5.13c-4.18,0-6.27-1.42-6.27-4.28s1.73-4.29,5.2-4.29c2.09,0,4.79.14,8.13.42q5.83.63,20.63.63,15.42,0,21.05-.42,5.2-.42,7.92-.42c2.91,0,4.38,1.21,4.38,3.65,0,2-1.54,3.57-4.6,4.71q-7.53,2.29-11.4,6.36T1939.44,265l-59.16,138.67q-3.51,7.92-9.92,7.92-6,0-8.47-6.67l-37.21-97.84-47.87,99.5a8.8,8.8,0,0,1-8.67,5.43q-5.36,0-7-4.6l-49.54-128.1-3.76-10q-6.7-17-21.33-23-5-2.06-5-5.11,0-4.09,6.9-4.09,1.88,0,7.31.42,6.48.61,22.79.62l22.15-.41,8.78-.21,4.81,1.07a3.28,3.28,0,0,1,1.67,3.22c-.14,2-1.46,3.35-4,4.07l-5.64,1.46q-9.63,2.5-9.62,12.52,0,4.59,6,21.08Z"/><path d="M543.25,411.25a1.31,1.31,0,0,1-.51-2.52L595,386.37a1.31,1.31,0,0,1,1.72.69,1.33,1.33,0,0,1-.69,1.73l-52.3,22.35A1.39,1.39,0,0,1,543.25,411.25Z"/><path d="M765.09,243.26a1.31,1.31,0,0,1-1.21-.8,1.3,1.3,0,0,1,.69-1.72l52.3-22.36a1.32,1.32,0,0,1,1,2.42l-52.3,22.35A1.3,1.3,0,0,1,765.09,243.26Z"/><path d="M1525.17,69.34a2.33,2.33,0,0,0-3.05-1.22L1378.3,129.59a2.34,2.34,0,0,0-1.22,3.06s.05,0,.07.07l.11,12.34V376.88q0,10-3.24,14.53t-12.65,7.21c-4,1.09-6,2.8-5.85,5.11q.2,4.09,5.66,4.09,1.26,0,8-1,4.6-.63,24.51-.63h10.9l9.17-.11,27.36.16c2.93,0,6.16-.05,9.9-.05h10.9l18.23-.21a52,52,0,0,1,9.43.63,26.28,26.28,0,0,0,5.45.83c3.06,0,4.54-1.56,4.4-4.7-.15-2.17-2.16-3.6-6.06-4.29q-21.33-3.56-25.92-14-4-9.21-4-26.36V112.67l.21-6.49c0-3.63-.1-8-.1-8L1524,72.39A2.31,2.31,0,0,0,1525.17,69.34ZM1421,395.9c-15.28,0-14.9-24-14.9-35.43V125a4.68,4.68,0,0,0,1.1.81,12.65,12.65,0,0,0,3.56.43l10.45-.42q13.36,0,13.38,19.23V360.14C1434.59,366.83,1436.27,395.9,1421,395.9Z"/><path d="M639.39,62.65a2.34,2.34,0,0,0-3-1.22l-163.66,70a2.32,2.32,0,0,0-1.22,3h0c3.34,6.41,5,16,5,28.76v68.16a82.18,82.18,0,0,0-20.44,4.9A91,91,0,0,0,426,230.77q-37.15,0-62.73,27.56T337.7,326q0,36.33,21.39,61T412,411.58A68.58,68.58,0,0,0,442,405.25c.2-.1.44-.25.65-.35a67.61,67.61,0,0,0,30,6.68q16.71,0,29.95-6.33t34.55-24.6V401.2q0,10.59,4.82,10.38a7.49,7.49,0,0,0,.87-.18l.49-1.47,38.82-16.59-1.73.06q-14.43,0-14.43-23.62V104.09l-.21-3.76V96.68l72.48-31A2.31,2.31,0,0,0,639.39,62.65ZM382.46,368.24q-20.29-25.14-20.3-59.39,0-31.31,15.51-50.52t40.73-19.2a70.13,70.13,0,0,1,23.73,4,90.15,90.15,0,0,0-18.3,15.17Q398.27,285.89,398.26,326q0,36.33,21.4,61a81.56,81.56,0,0,0,6,6.18C409.2,391.76,394.8,383.52,382.46,368.24Zm94,23.23a55.3,55.3,0,0,1-9.05-3.34c2.9-2.32,5.88-4.77,9.05-7.48Zm0-36.12q0,16.93-12.81,27.49c-.82.68-1.78,1.17-2.65,1.78a74.46,74.46,0,0,1-18-16.38q-20.31-25.14-20.31-59.39,0-31.31,15.52-50.52a52.83,52.83,0,0,1,12.61-11.42,73,73,0,0,1,16.49,12q9.17,8.76,9.16,27.54Zm0-109.74c-3.34-2-6.68-3.58-10-5.15a55.82,55.82,0,0,1,10-1.21Zm60.57,109.74q0,16.93-12.81,27.49a44.84,44.84,0,0,1-18.34,8.74c-.21-3.13-.57-10.36-.57-21.8V244.08A70.64,70.64,0,0,1,527.9,259q9.17,8.76,9.17,27.54Zm0-109.74a107.84,107.84,0,0,0-31.72-12.56V125.34c.14.07,2.1-.14,3.08-.14l7.31-.42q21.33-1.25,21.33,38.4Z"/></svg></Link></div>
        <div className="crow" data-aos="fade-up"><img src={crow} alt="Crying crow" /></div>
    
      <div class="lyrics">

         <h2>julian</h2>
        <p>all of the moments</p>
        <p>when words should be spoken</p>
        <p>we’ll both remain frozen</p>
        <p>this room is so cold</p>
        <p>the tireless taunting</p>
        <p>of “what could be”</p> 
        <p>is haunting me</p>
        <p>quickly the word love</p>
        <p>will become my poison</p>
        <br />
        <p>don’t challenge the verdict</p>
        <p>you know that i’m guilty</p>
        <p>the chains call my name</p>
        <p>and i’ll answer their call</p>
        <p>oh prison of loneliness</p>
        <p>you are my keeper</p>
        <p>i promise to stay here</p>
        <p>i promise to leave her</p>
        <br />
        <p>let go of me,</p>
        <p>i've made up mind</p>
        <p>move on from me,</p>
        <p>and leave me behind</p>
        <br />
        <p>when we were last speaking</p>
        <p>i know that you felt it</p>
        <p>the loom has been broken</p>
        <p>we’re falling apart</p>
        <p>the way that i see you</p>
        <p>is not how you see me</p>
        <p>the words that you’re speaking</p>
        <p>i can’t understand you</p>
        <br />
        <p>i’m not hard of hearing</p>
        <p>i’ve just become distant</p>
        <p>i know that you care</p>
        <p>but i want you to go</p>
        <p>i don’t know who’s speaking</p> 
        <p>there’s so many voices</p>
        <p>i’m tired of choosing</p>
        <p>from so many choices</p>
        <br />
        <p>let go of me,</p>
        <p>i’ve made up my mind</p>
        <p>move on from me,</p>
        <p>and leave me behind</p>
        <br />
        <p>all of the memories;</p>
        <p>i’ll never forget them</p>
        <p>i know i once loved you</p>
        <p>and probably still do…</p>
        <p>our lives were so easy</p>
        <p>when we were both dreamers,</p>
        <p>but you are an artist</p>
        <p>and i am</p>
        <p>a teacher</p>
        <br />
        <p>take your belongings</p>
        <p>i don’t want to keep them</p>
        <p>they’re just a reminder</p>
        <p>of who i once was</p>
        <p>our lives are so different</p>
        <p>we want different futures</p>
        <p>if i’d known the outcome</p>
        <p>i’d probably refuse you</p>
        <br />
        <p>if i’d known the outcome</p>
        <p>i’d probably still choose you</p>
        <br />
        <p>let go of me,</p>
        <p>i’ve made up my mind</p>
        <p>move on from me,</p>
        <p>and leave me behind</p>
        <br />
        <br />

        <h2>man in tree</h2>
        <p>i look around and see the faces</p>
        <p>of people that i’ll never know</p>
        <p>they’re putting on their airs and graces</p>
        <p>i’ve heard that it’s the way to go</p>
        <br />
        <p>they all pretend that they can’t see me</p>
        <p>they never look me in the eye</p>
        <p>they hate it when i ask for money</p>
        <p>but i’ll never know if i don’t try</p>
        <br />
        <p>wash right over</p>
        <p>see right through</p>
        <p>going colder</p>
        <p>turning blue</p>
        <p>wash right over</p>
        <p>i can see right through</p>
        <p>going colder</p>
        <p>i am turning blue</p>
        <br />
        <p>they walk through…</p>
        <br />
        <p>i was feeling smaller by the hour</p>
        <p>so i climbed up in a tree</p>
        <p>i stayed up there for several hours</p>
        <p>they even showed me on tv</p>
        <p>i didn’t do it so they’d see me</p>
        <p>i did it so i could feel tall</p>
        <p>second chances don’t come easy</p>
        <p>so i don’t mind it if i fall</p>
        <br />
        <p>wash right over</p>
        <p>see right through</p>
        <p>going colder</p>
        <p>turning blue</p>
        <p>wash right over</p>
        <p>i can see right through</p>
        <p>going colder</p>
        <p>i am turning blue</p>
        <br />
        <p>they walk through…</p>
        <br />
        <p>just ask how i’m feeling</p>
        <p>i promise not to scream</p>
        <p>i’m a human being</p>
        <p>inside my heart’s beating</p>
        <br />
        <p>wash right over</p>
        <p>see right through</p>
        <p>going colder</p>
        <p>turning blue</p>
        <p>wash right over</p>
        <p>i can see right through</p>
        <p>going colder</p>
        <p>i am turning blue</p>
        <br />
        <p>they walk through…</p>
        <br />
        <br />

        <h2>great escape</h2>
        <p>feel a cold cold wind</p>
        <p>press against my face</p>
        <p>feel the warmth of your embrace</p>
        <p>there once or twice</p>
        <p>i know i saw the light</p>
        <p>it took you in the night</p>
        <br />
        <p>you were all i had…</p>
        <br />
        <p>your body lies</p>
        <p>somber as a stone</p>
        <p>its beauty holds its own</p>
        <p>you spread your wings</p>
        <p>full of hollow bones</p>
        <p>you ride the wind that blows</p>
        <br />
        <p>you were all i had…</p>
         <br />
        <p>as i dreamt, </p>
        <p>i felt you slip</p>
        <p>away from me</p>
        <p>and there it was,</p>
        <p>a cloud of dust,</p>
        <p>where you once breathed </p>
        <p>the walls collapsed,</p>
        <p>the floor caved in</p>
        <p>i fell right through</p>
        <p>a great escape </p>
        <p>that I had made</p>
        <p>to be with you</p>
        <br />
        <p>you were all i had…</p>
        <br />
        <br />

        <h2>haunt me</h2>
        <p>i have heard you cry</p>
        <p>in the lightless night</p>
        <p>some have seen around,</p>
        <p>but many watched you drown</p>
        <br />
        <p>haunt me</p>
        <p>i know where you are</p>
        <p>i can feel hiding in the dark</p>
        <p>fearless</p>
        <p>i stand on my mark</p>
        <p>shaking silent in the garden</p>
        <p>show your face, little darling</p>
        <p>i know you’re there</p>
        <br />
        <p>i’m scared to turn around</p>
        <p>i’m frightened by the sound</p>
        <p>i feel you in my bones</p>
        <p>just let me be alone</p>
        <br />
        <p>sleepless </p>
        <p>i lay awake in the night</p>
        <p>calling out your name in fright</p>
        <p>people</p>
        <p>they will look to the sky</p>
        <p>shaking silent in the garden</p>
        <p>show your face, my darling</p>
        <p>we all know you’re there</p>
        <br />
        <p>i have heard you cry</p>
        <p>in the lightless night</p>
        <p>some have seen you around,</p>
        <p>but i watched you drown</p>
        <br />
        <p>haunt me</p>
        <p>i know where you are</p>
        <p>i can feel you hiding in the dark</p>
        <p>fearless </p>
        <p>i stand on my mark</p>
        <p>shaking silent in the garden</p>
        <p>show your face, my darling</p>
        <p>i know</p>
        <p>i know</p>
        <p>i know you’re there</p>
        <br />
        <br />


        <h2>high tide freak out</h2>
        <p>lay down on the ground</p>
        <p>and breath it in</p>
        <p>look at the sky</p>
        <p>and count to ten</p>
        <br />
        <p>my mind </p>
        <p>can say a lot sometimes</p>
        <p>it can hold me down</p>
        <p>or pass me by</p>
        <br />
        <p>talk to your friends</p>
        <p>or draw a bath</p>
        <p>pray to a god</p>
        <p>or take a nap</p>
        <br />
        <p>my mind</p>
        <p>has said a lot this time</p>
        <p>i hardly sleep</p>
        <p>it speaks all night</p>
        <br />
        <p>remind yourself</p>
        <p>of the peace that you’ve known before</p>
        <p>you’re not alone</p>
        <p>i can tell that you think you are</p>
        <p>it’s fine to feel lost</p>
        <p>it’s okay to fight everything</p>
        <p>care for yourself</p>
        <p>and you will be okay</p>
        <br />
        <p>it’s nothing new</p>
        <p>to feel like this</p>
        <p>to feel unrest</p>
        <p>to feel at risk</p>
        <br />
        <p>my mind</p>
        <p>can say a lot sometimes</p>
        <p>my hands will shake</p>
        <p>i’ll fall behind</p>
        <br />
        <p>to lose control</p>
        <p>to lose your mind</p>
        <p>to lose yourself</p>
        <p>to fade the lines</p>
        <br />
        <p>my mind</p>
        <p>has said a lot this time</p>
        <p>i’m checking out</p>
        <p>i’ll try to hide</p>
        <br />
        <p>remind yourself</p>
        <p>of the peace that you’ve known before</p>
        <p>you’re not alone</p>
        <p>i can tell that you think you are</p>
        <p>it’s fine to feel lost</p>
        <p>it’s okay to fight everything</p>
        <p>care for yourself</p>
        <p>and you will be okay</p>
        <br />
        <p>took all my advice</p>
        <p>to try to get out of my head</p>
        <p>tried to talk to you</p>
        <p>but found myself lying instead</p>
        <p>can’t we just not do this?</p>
        <p>let me go on without feeling</p>
        <p>you know what?</p>
        <p>i’m fine this time</p>
        <p>i’ll be alright on my own</p>
        <br />
        <p>when the time comes</p>
        <p>and you have lost your way,</p>
        <p>you’ll give into everything </p>
        <p>your mind will say</p>
        <br />
        <p>i’m not the favorite son</p>
        <p>i’m not the only one</p>
        <p>what if my friends don’t care?</p>
        <p>what if my wife’s not there?</p>
        <p>i’m not worth anything</p>
        <p>can anyone see me?</p>
        <p>what if i don’t exist</p>
        <p>what if?</p>
        <p>what if?</p>
        <p>what if?</p>
        <br />
        <p>drowning</p>
        <p>sinking down</p>
        <p>taken by</p>
        <p>the rising tide</p>
        <p>darkness</p>
        <p>sinking in</p>
        <p>oh pull me under</p>

 
        </div>
    </main>
    </>
  )
}

// Step 3: Export your component
export default LyricsPage