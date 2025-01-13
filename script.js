window.onload = function() {
    
    let first = "A";
    let adj = ["two headed", "lonely", "angry", "crazy", "slow", "old", "nuclear", "smelly", "glowing"];
    let noun = ["jogger", "dog", "racoon", "driver", "merchant", "comedian", "pinecone"];
    let action= ["burned my", "kicked my", "threw my", "yelled at my", "stole my", "took my", "hit my", "stole my", "bit my"];
    let possetion = ["car", "shoe", "toe", "wallet", "watch", "keys", "sandwich", "phone", "computer", "shirt"];
    let where = ["on the street", "in my house", "in my driveway", "near the toilet", "in front of the office", "near the mall", "at the bus station"];

    
    let rdm1 = Math.floor(Math.random() * adj.length);
    let rdm2 = Math.floor(Math.random() * noun.length);
    let rdm3 = Math.floor(Math.random() * action.length);
    let rdm4 = Math.floor(Math.random() * possetion.length);
    let rdm5 = Math.floor(Math.random() * where.length);


    document.querySelector("#excuse").innerHTML = first + " " + adj[rdm1] + " " + noun[rdm2] + " " + action[rdm3] + " " + possetion[rdm4] + " " + where[rdm5];

};