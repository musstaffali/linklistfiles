class insertAt{
    insertAt(pos,data) {
// check to see if pos is valid by checking if less than 0 or greater than size of list
    if(pos < 0 || pos > this.size)
     return;
// check to see if pos is equal to 0
    if(pos === 0)
// if pos is 0 then prepend
     this.prepend(data);
// check to see if pos is equal to size of list
    else if(pos === this.size)
// insert in back of list using append method
     this.append(data);
    else{
// create node you wish to insert 
        const n = new Node(data);
        let prev = null;
        let current = this.header;
        let counter = 0;
// keep going as long as counter is less than pos
        while(counter < pos){
            prev = current;
            current = current.next;
// Increment counter to keep track of what position we are in
            counter++;
        }
        n.next = current;
        prev.next = n;
        this.size++;
    }
}
}