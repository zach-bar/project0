let feelings = [
    {
        name: "I'm Feeling Generous",
        reference: "https://play.google.com/store/apps/editorial_collection/promotion_topic_donations?hl=en_US&pli=1",
    },
    {
        name: "I'm Feeling Curious",
        reference: "https://www.google.com/search?q=kerning",
    },
    {
        name: "I'm Feeling Playful",
        reference: "https://www.google.com/search?q=pacman",
    },
    {
        name: "I'm Feeling Trendy",
        reference: "https://trends.google.com/trends/trendingsearches/daily?geo=US&hl=en-US",
    },
    {
        name: "I'm Feeling Funny",
        reference: "https://www.google.com/doodles/122nd-birthday-of-charlie-chaplin",
    },
    {
        name: "I'm Feeling Hungry",
        reference: "https://www.google.com/search?q=dinner+recipes",
    },
    {
        name: "I'm Feeling Adventurous",
        reference: "https://www.google.com/search?q=bat+signal",
    },
    {
        name: "I'm Feeling Stellar",
        reference: "https://www.google.com/search?q=orion+nebula",
    },
    {
        name: "I'm Feeling Artistic",
        reference: "https://artsandculture.google.com/partner/hong-kong-heritage-museum",
    },
    {
        name: "I'm Feeling Doodley",
        reference: "https://www.google.com/doodles",
    },
]
let lucky = document.getElementById('lucky');
function changeFeelings(){
    let index = Math.floor(Math.random() * 10);;
    lucky.innerHTML = feelings[index].name;
    document.getElementById('form').action = feelings[index].reference;
}
function changeBack(){
    lucky.innerHTML = "I'm Feeling Lucky";
    document.getElementById('form').action = null;
}