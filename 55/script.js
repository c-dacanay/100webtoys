let list = document.querySelectorAll("li")
let content = document.getElementById("content")
let musings = {
    0: `<p>Not just sad, not just numb, or shocked, or disappointed, or hurt, or despondent, or in denial or angry or lost or confused or panicked or calm or hysterical or god forbid "okay". Allow words to fail; words can trick you into thinking that this is simple. It's not.</p>
    <p>Feel it in your body, in your breath, in your fingertips, and in all the other little ways you forget you know how to feel.</p>
    <p>Don't think about what it means.</p> 
    <p>Don't think about anything.</p>`,
    1: `<p>During grief people will want to perform rituals that you're skeptical of. Do them anyway. The rituals are much older than you, and they will outlive you, too.</p>
	<p>Be surprised at the effects of the choreography. Or turn your nose up at it. Become transformed either way.</p>`, 
    2: `<p>Let grief soak into every minute of your day. Let it drain the color from everything. Let it echo in the chirps of birds. Remember a poem where someone called grass "<a href="https://www.poetryfoundation.org/poems/45477/song-of-myself-1892-version" target="_blank">the beautiful uncut hair of graves</a>".</p> 
    <p>Chide yourself for being melodramatic. Chide yourself for chiding yourself. Wallow. Be selfish and pathetic. Enjoy some helplessness.</p>
	<p>After a little while you must decide to come up for air. Otherwise you run the risk of letting your grief turn you into something small and miserable.</p>
	<p>We have control over very few things, but only you choose when to stop. Stop drowning the minute you can. There are better ways to heal, and there is always more to do.</p>`,
    3: `<p>Write letters to people who won't read them. Eat a home cooked meal. Look at old pictures and share your favorites. Buy a bottle of whiskey and finish it. Hold people tightly. Give speeches. Repeat the words of the dead. Pray in earnest for the first time in a decade. Obliterate yourself with fiction. Listen to loud music with your eyes closed. Cry on the dance floor. Hold hands. Sleep fourteen hours, like you're recovering from a fever.</p><p>Write yourself letters and read them.</p>`,
    5: `<p>Wear your grief as a stylish shirt. When you get compliments on it say thank you. Sometimes you say who the shirt belonged to. People may become awkward, but other times they smile and pat you on the shoulder. Feel proud that you wear your grief instead of hiding it in your closet to collect dust.</p>`,
    6: `<p>Your grief can live in things, but they are just things. Things will never be a person, or a time, or a memory. Notice how little you care for an empty chair. Notice how much you cherish a handkerchief. Take some mementos but let go of the rest. They will be freer elsewhere.</p>`,
    7: `<p>Go about your days. Talk to friends about silly things. Laugh. Worry about something small. Wonder why you weren't worried about it two months ago. Remember. Worry less.</p><p>Transform any guilt for living into gratitude.</p>`,
    4: `<p>Look for it in books, in music, in movies, in friends, in family, in strangers in the airport, in instagram stories, in history, in old emails, on street corners, at the deli, on the subway. Find it everywhere. Find it in places that make you <a href="https://www.youtube.com/watch?v=7SXKHiPQPhk" target="_blank">laugh</a>. </p><p>Rethink platitudes. Start feeling like all the corny shit is true. Wonder if this is part of getting old.</p>`,
    9: `<p>Place mementos in your home. Keep pictures where you can see them. Give grief a place on your mantle. Live with it.  Look at it every day and eventually smile.</p>
	<p>Accept it but don't recover. Don't pretend there can be a life without pain.</p> 
	<p>It does not have to be a haunting, or a ghost, or an albatross. It changed you, and you will change it too. A wise person told you that grief does not get smaller, but you will grow around it.</p>
	<p>Every time you see that some new grief has made a home in your heart, remember that it is a path that leads to love.</p>`,
    8: `<p>Share it, even though it's hard. Even when people feel bad and don't know what to say.</p>
	<p>Listen to people who share their own grief, new and old. Learn from them. If you're lucky, you will be asked questions that feel good to answer. You will finally know good questions to ask in return. If you don't hide behind pain you will become closer to the people that you love. You will learn to love people who you don't know. The hurt will connect you through generations. This is the best of grief.</p>
	<p>There are only those who have lived it and those who have yet to. Remember who managed to offer you comfort and how they did. Pass it on.</p>`
}

console.log(list)

list.forEach(li => {
    li.addEventListener("click", show)
})

function show() { 
    list.forEach(li => {
        if (li.classList.contains("active"))
        {
            li.classList.remove("active");
        }
    })
   content.style.opacity = 0;
   list[this.value].classList.add("active");
   setTimeout(()=> {
    content.style.opacity = 1;
    content.innerHTML = musings[this.value]
   }, 1250)


}