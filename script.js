import heapq

def mincost(arr):
    if len(arr) <= 1:
        return 0  # No cost if there's one or zero ropes

    # Convert the list into a min-heap
    heapq.heapify(arr)

    total_cost = 0

    while len(arr) > 1:
        # Extract the two smallest ropes
        first = heapq.heappop(arr)
        second = heapq.heappop(arr)

        # Connect them
        cost = first + second
        total_cost += cost

        # Add the combined rope back to the heap
        heapq.heappush(arr, cost)

    return total_cost
