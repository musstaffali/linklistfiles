// append or insert node in list
class append {
    append(data){
        // Creating node to insert in list
        const n = new Node(data);
        if(this.size === 0){
            this.header = n;
            this.tail = n;
        }
        else{
            const temp = this.tail;
            this.tail = n
            temp.next = this.tail;
        }
        this.size++;
    }
}