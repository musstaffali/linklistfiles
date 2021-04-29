// append or insert node in list
class append {
    append(data){
        // Creating node to insert in list
        const n = new Node(data);
        // check if size is 0
        if(this.size === 0){
            // if size has 0 nodes then add new node to header
            this.header = n;
            // if size has 0 nodes then add new node to tail
            this.tail = n;
        }
        else{
            // if size has node then 
            const temp = this.tail;
            this.tail = n
            temp.next = this.tail;
        }
        this.size++;
    }
}