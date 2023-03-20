let feelings = [
    {
        name: "I'm Feeling Generous",
        reference: "https://play.google.com/store/apps/editorial_collection/promotion_topic_donations?hl=en_US&pli=1",
    },
    {
        name: "I'm Feeling Curious",
        search: [
            {ref: "kerning",},
            {ref: "I'm Feeling Curious",},
            {ref: "do a barrel roll",}, 
        ],
    },
    {
        name: "I'm Feeling Playful",
        search: [
            {ref:"pacman",}, 
            {ref:"minesweeper",},
            {ref:"spin a dreidel",},
            {ref:"atari breakout",},
        ],
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
        search: [
            {ref:"dinner recipes",},
            {ref: "pizza near me",},
        ],
    },
    {
        name: "I'm Feeling Adventurous",
        search: [
            {ref:"bat signal",},
            {ref:"roll a die",}, 
            {ref:"askew",}, 
            {ref:"baby yoda",}, 
            {ref:"the last of us",},
        ],
    },
    {
        name: "I'm Feeling Stellar",
        search: [
            {ref:"orion nebula",},
            {ref: "ingenuity",},
            {ref: "reflection nebula",},
        ],
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
    let index = Math.floor(Math.random() * 10);
    lucky.innerHTML = feelings[index].name;
    if (feelings[index].reference != null)
        document.getElementById('form').action = feelings[index].reference;
    else{
        document.getElementById('input').value = feelings[index].search[Math.floor(Math.random() * feelings[index].search.length)].ref;
        document.getElementById('input').style.fontSize= "0%";
    }
}
function changeBack(){
    lucky.innerHTML = "I'm Feeling Lucky";
    document.getElementById('form').action = "https://www.google.com/search";
    document.getElementById('input').value = null;
    document.getElementById('input').style.fontSize = "100%";
}