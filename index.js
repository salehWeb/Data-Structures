class LinkedList {
    head = null
    tail = null
    addToTail(value)
    {
        if (this.head === null)
        {
            this.head = new Node(value);
            this.tail = this.head;
        }
        else
        {
            this.tail.next = new Node(value);
            this.tail = this.tail.next;
        }
    }

    addToHead(value)
    {
        if (this.head === null)
        {
            this.head = new Node(value);
            this.tail = this.head;
        }
        else
        {
            let temp = this.head;
            this.head = new Node(value);
            this.head.next = temp;
        }
    }
    removeHead()
    {
        if (this.head === null)
        {
            return null;
        }
        else
        {
            let temp = this.head;
            this.head = this.head.next;
            return temp.value;
        }
    }
    removeTail()
    {
        if (this.head === null)
        {
            return null;
        }
        else if (this.head === this.tail)
        {
            let temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }
        else
        {
            let temp = this.head;
            while (temp.next !== this.tail)
            {
                temp = temp.next;
            }
            let temp2 = this.tail;
            this.tail = temp;
            this.tail.next = null;
            return temp2.value;
        }
    }

    contains(value)
    {
        if (this.head === null)
        {
            return false;
        }
        else
        {
            let temp = this.head;
            while (temp !== null)
            {
                if (temp.value === value)
                {
                    return true;
                }
                temp = temp.next;
            }
            return false;
        }
    }

    size()
    {
        if (this.head === null)
        {
            return 0;
        }
        else
        {
            let temp = this.head;
            let count = 0;
            while (temp !== null)
            {
                count++;
                temp = temp.next;
            }
            return count;
        }
    }

 
}

class DoublyLinkedList {
    head = null
    tail = null
    addToTail(value)
    {
        if (this.head === null)
        {
            this.head = new Node(value);
            this.tail = this.head;
        }
        else
        {
            this.tail.next = new Node(value);
            this.tail.next.prev = this.tail;
            this.tail = this.tail.next;
        }
    }

    addToHead(value)
    {
        if (this.head === null)
        {
            this.head = new Node(value);
            this.tail = this.head;
        }
        else
        {
            let temp = this.head;
            this.head = new Node(value);
            this.head.next = temp;
            this.head.next.prev = this.head;
        }
    }

    removeHead()
    {
        if (this.head === null)
        {
            return null;
        }
        else
        {
            let temp = this.head;
            this.head = this.head.next;
            return temp.value;
        }
    }

    removeTail()
    {
        if (this.head === null)
        {
            return null;
        }
        else if (this.head === this.tail)
        {
            let temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }
        else
        {
            let temp = this.head;
            while (temp.next !== this.tail)
            {
                temp = temp.next;
            }
            let temp2 = this.tail;
            this.tail = temp;
            this.tail.next = null;
            return temp2.value;
        }
    }

    contains(value)
    {
        if (this.head === null)
        {
            return false;
        }
        else
        {
            let temp = this.head;
            while (temp !== null)
            {
                if (temp.value === value)
                {
                    return true;
                }
                temp = temp.next;
            }
            return false;
        }
    }

    size()
    {
        if (this.head === null)
        {
            return 0;
        }
        else
        {
            let temp = this.head;
            let count = 0;
            while (temp !== null)
            {
                count++;
                temp = temp.next;
            }
            return count;
        }
    }
}

class Stack {
    top = null
    constructor()
    {
        this.top = null;
    }
    push(value)
    {
        if (this.top === null)
        {
            this.top = new Node(value);
        }
        else
        {
            let temp = this.top;
            this.top = new Node(value);
            this.top.next = temp;
        }
    }
    pop()
    {
        if (this.top === null)
        {
            return null;
        }
        else
        {
            let temp = this.top;
            this.top = this.top.next;
            return temp.value;
        }
    }
    peek()
    {
        if (this.top === null)
        {
            return null;
        }
        else
        {
            return this.top.value;
        }
    }
    isEmpty()
    {
        if (this.top === null)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    size() {

        if (this.top === null)
        {
            return 0;
        }
        else
        {
            let temp = this.top;
            let count = 0;
            while (temp !== null)
            {
                count++;
                temp = temp.next;
            }
            return count;
        }
    }
}

class Queue {
    head = null
    tail = null
    constructor()
    {
        this.head = null;
        this.tail = null;
    }
    enqueue(value)
    {
        if (this.head === null)
        {
            this.head = new Node(value);
            this.tail = this.head;
        }
        else
        {
            this.tail.next = new Node(value);
            this.tail = this.tail.next;
        }
    }
    dequeue()
    {
        if (this.head === null)
        {
            return null;
        }
        else if (this.head === this.tail)
        {
            let temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }
        else
        {
            let temp = this.head;
            this.head = this.head.next;
            return temp.value;
        }
    }
    peek()
    {
        if (this.head === null)
        {
            return null;
        }
        else
        {
            return this.head.value;
        }
    }
    isEmpty()
    {
        if (this.head === null)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    size()
    {
        if (this.head === null)
        {
            return 0;
        }
        else
        {
            let temp = this.head;
            let count = 0;
            while (temp !== null)
            {
                count++;
                temp = temp.next;
            }
            return count;
        }
    }
}

class PriorityQueue {

    constructor()
    {
        this.head = null;
    }
    enqueue(value, priority)
    {
        if (this.head === null)
        {
            this.head = new Node(value, priority);
        }
        else
        {
            let temp = this.head;
            while (temp.next !== null && temp.next.priority < priority)
            {
                temp = temp.next;
            }
            let temp2 = temp.next;
            temp.next = new Node(value, priority);
            temp.next.next = temp2;
        }
    }
    dequeue()
    {
        if (this.head === null)
        {
            return null;
        }
        else
        {
            let temp = this.head;
            this.head = this.head.next;
            return temp.value;
        }
    }
    peek()
    {
        if (this.head === null)
        {
            return null;
        }
        else
        {
            return this.head.value;
        }
    }
    isEmpty()
    {
        if (this.head === null)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    size()
    {
        if (this.head === null)
        {
            return 0;
        }
        else
        {
            let temp = this.head;
            let count = 0;
            while (temp !== null)
            {
                count++;
                temp = temp.next;
            }
            return count;
        }
    }
}

class HashTable {
    constructor(size)
    {
        this.size = size;
        this.buckets = new Array(size);
        for (let i = 0; i < size; i++)
        {
            this.buckets[i] = new LinkedList();
        }
    }
    hash(key)
    {
        let sum = 0;
        for (let i = 0; i < key.length; i++)
        {
            sum += key.charCodeAt(i);
        }
        return sum % this.size;
    }
    set(key, value)
    {
        let index = this.hash(key);
        this.buckets[index].addToTail(value);
    }
    get(key)
    {
        let index = this.hash(key);
        return this.buckets[index].contains(key);
    }
    remove(key)
    {
        let index = this.hash(key);
        this.buckets[index].remove(key);
    }
}

class Graph {
    constructor()
    {
        this.adjacencyList = {};
    }
    
    addVertex(vertex)
    {
        this.adjacencyList[vertex] = [];
    }
    
    addEdge(vertex1, vertex2)
    {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    
    removeEdge(vertex1, vertex2)
    {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
    
    removeVertex(vertex)
    {
        while (this.adjacencyList[vertex].length)
        {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    
    depthFirstSearch(start)
    {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex)
        {
            if (!vertex)
            {
                return null;
            }
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor])
                {
                    return dfs(neighbor);
                }
            }
            );
        })(start);
        return result;
    }
    
    breadthFirstSearch(start)
    {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        const queue = new Queue();
        queue.enqueue(start);
        visited[start] = true;
        while
        (queue.size())
        {
            const vertex = queue.dequeue();
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor])
                {
                    queue.enqueue(neighbor);
                    visited[neighbor] = true;
                }
            }
            );
        }
        return result;
    }
}