public class AdjacencyList {
     private int vertex;
     private LinkedList<Integer> [] list;

     public  AdjacencyList(int vertex) {
	this.vertex = vertex;
	list =  new LinkedList[vertex];

	for (int i = 0; i < vertex; i++) {
		list[i] = new LinkedList <Integer> ();
	}
     }

     public void addNode(int start, int destination) {
	list[start].addFirst(destination);
	list[destination].addFirst(start); // in case of undirected graph.

     }

     public void printGraph() {
	for (int i = 0; i < vertex; i++) {
		int size  = list[i].size();

		for (j = 0; j < size; j++) {
			System.out.print(list[i].get(j) + ' ');
		}

		System.out.printLn();
	}
     }

     public linkedList<Integer> [] getGraphNodes() {
	return list;
     }

}
