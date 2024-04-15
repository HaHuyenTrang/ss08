function parseInput(input:"number"|"boolean"|"string"|"null"|"undefined"):number|boolean|string|null|undefined{
    if(input==="number"){
        return "number";
    }else if(input==="boolean"){
        return true;
    }else if(input==="string"){
        return "number";
    }else if(input==="null"){
        return null;
    }else{
        return undefined;
    }
}

