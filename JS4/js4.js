class IntegerSet{
    constructor(MAX){
        this.MAX = MAX; 
        this.values = []

        for(var i=0; i<MAX+1; i++){
            this.values.push(false);
        }
    }

    insertSET(n){
        if(typeof(n) === "number"){
            this.values[n] = true;
        }
        else{
            n.forEach(element => {
                this.values[element] = true;  
            });
        }
    }

    delete(n){
        if(typeof(n) === "number"){
            this.values[n] = false;
        }
        else{
            n.forEach(element => {
                this.values[element] = false;  
            });
        }
    }

    toString(){
        let str = '{'
        for(var i=0; i<(this.values.length)-1; i++){
            if(this.values[i] == true){
                str += (i + ", ");
            }
        }

        if(this.values[this.MAX] == true){
            str += (i + "}");
        }else{
            if(str.length > 1){str = str.slice(0,-2) + "}"}
            else{str += "}"}
        }
        return str
    }

    static unionSET(sets){
        let sizeM = sets.sort(function(a,b){
            return a.MAX < b.MAX;
        })[0].MAX
        var setUnion = new IntegerSet(sizeM);

        for(let i=0;i<setUnion.values.length;i++){
            let validate = false;
            for(let setInt of sets){
                try{
                    if(setInt.values[i] == true){
                        validate = true;
                        break;
                    }
                }
                catch(e){
                    continue;
                }
            }
            if(validate == true){setUnion.values[i]=true}
        }
        return setUnion
    } 
    
    static interSet(sets){
        let sizeM = sets.sort(function(a,b){
            return a.MAX < b.MAX;
        })[0].MAX
        var setIntersection = new IntegerSet(sizeM);

        for(let i=0;i<setIntersection.values.length;i++){
            let validate = true;
            for(let setInt of sets){
                try{
                    if(setInt.values[i] == true){
                        validate = (validate && true);
                    }
                    else{
                        validate = false;
                        break;
                    }
                }
                catch(e){
                    validate = false;
                    break;
                }
            }
            if(validate == true){setIntersection.values[i]=true}
        }
        return setIntersection
    }
    
    static diffSET(sets){
        let sizeM = sets.sort(function(a,b){
            return a.MAX < b.MAX;
        })[0].MAX
        var setDifference = new IntegerSet(sizeM);

        for(let i=0;i<setDifference.values.length;i++){
            let validate = true;
            for(let setInt of sets){
                try{
                    if(setInt.values[i] == true){
                        validate = (validade && true);
                    }
                }
                catch(e){
                    validate = false;
                    break;
                }
            }
            if(validate == true){setDifference.values[i]=true}
        }
        return setDifference
    } 
}


console.log("Number max of elements\n")
    set1 = new IntegerSet(4);       
    set2 = new IntegerSet(7) ;       
    set3 = new IntegerSet(10) ;      
console.log("Inserting\n");
    set1.insertSET([1,2,-1,4]); ;         
    set2.insertSET([0,1,2,4,6,5]) ;        
    set3.insertSET([1,2,10,8,5,0,0,9]);      
console.log("Deleting\n");
    set3.delete(9)                 

console.log("Set 1: " + set1.toString()+"\n")
console.log("Set 2: " + set2.toString() + "\n")
console.log("Set 3: " + set3.toString() + "\n")

console.log("DIFF: " + IntegerSet.diffSET([set1,set2,set3]).toString()+"\n");
console.log("Union: " + IntegerSet.unionSET([set1,set2,set3]).toString()+"\n");
console.log("Interset: " + IntegerSet.interSet([set1,set2,set3]).toString()+"\n");
