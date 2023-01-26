class Graph {
    private int vertex;
    private int [] [] nodes;

    public Graph(int vertex) {
	this.vertex = vertex;

	nodes =  new int [vertex][vertex];
    }


    public void addEdge(int start, int destination, ) {
	nodes[start][destination] = 1;
	nodes[destination][start] = 1; // In case of undirected graph
    }

    public void printGraph() {
	for (int i = 0; i < vertex; i++) {

		for (int j= 0; j < vertex; j ++) {
			System.out.print(nodes[i][j] + " ");
		}

		System.out.printLn();
	}
    }
	
    public int [][] returnGraphEdges() {
	return nodes;
    }

}
