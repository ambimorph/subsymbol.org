import networkx as nx
from itertools import combinations

nodes = ["name", "address", "contents"]

G = nx.DiGraph()
G.add_nodes_from(nodes)
G.add_edges_from(combinations(nodes, 2))
nx.draw_circular(G)

plt.savefig("../galleries/name_triangle.png")
