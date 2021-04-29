// append or insert node in list
class append {
    append(data){
        // Creating node to insert in list
        const n = new Node(data);
        // check if size is 0
        if(this.size === 0){
            // sets tail to reference newly made node
            this.header = n;
            // sets tail to reference newly made node
            this.tail = n;
        }
        else{
            // if size has node then save refernce of tail in temporary var
            const temp = this.tail;
            this.tail = n
            temp.next = this.tail;
        }
        this.size++;
    }
}