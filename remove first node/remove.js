class removeList {
    removeList(){
        // check if list is empty
        if(this.size === 0)
        // if empty return null
            return null;
        // Save data within the header
        let data = this.header.data;
        // check if list has 1 element
        if(this.size === 1){
            this.header = null;
            this.tail = null;
        }
        // if data has more than 1 element
        else
        // advance header to next node
           this.header = this.header.next;
        // subtract the size
        this.size--;
        return data;
    }
}