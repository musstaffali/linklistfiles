class removeFirst {
    removeFirst(){
    if(this.size === 0)
            return null;
        let data = this.header.data;
        if(this.size === 1){
            this.header = null;
            this.tail = null;
        }
        else
        this.header = this.header.next;
        this.size--;
        return data;
        }
    }