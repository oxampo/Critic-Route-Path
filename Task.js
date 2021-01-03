class Task {

    constructor(description='',identif='',duration='',predecessors=[],successors=[]){
        this.description = description;
        this.identif = identif;
        this.duration = duration;
        this.predecessors = predecessors;
        this.successors = successors;
    }
}