
class prepend {
    prepend(data){
        const n = new Node(data);
        // checks to see if any node in list
        if(this.size === 0){
            //sets header to reference newly made node
            this.header = n;
            //sets tail to reference newly made node
            this.tail = n;
        }
        else{
            // make the next property of n reference the node that head is referencing
            n.next = this.header;
            // set header to refernce n
            this.header = n;
        }
        // increment size
        this.size++;
    }
}