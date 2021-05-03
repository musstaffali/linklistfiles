class removeAt{
        removeAt(pos){
        if(pos < 0 || pos >= this.size)
        return null;
        if(pos === 0)
        return this.removeFirst();
        else if(pos === this.size - 1)
        return this.removeLast();
        else{
            let prev = null; 
            let current = this.header;
            let counter = 0;
            while (counter < pos){
                prev = current;
                current = current.next;
                counter++;
            } 
            prev.next = current.next;
            this.size--;
            return current.data;
        }
    }
}