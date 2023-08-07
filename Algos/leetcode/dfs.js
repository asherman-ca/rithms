function parallelizeTaskSchedules(taskSchedules) {
	// Create a graph to represent task dependencies
	const graph = {}

	// Create a mapping to store the maximum end time for each task type
	const maxEndTime = {}

	// Build the graph and find maximum end times for each task type
	for (let i = 0; i < taskSchedules.length; i++) {
		const schedule = taskSchedules[i]

		for (let j = 0; j < schedule.length; j++) {
			const task = schedule[j]
			const { type, duration } = task

			// Initialize the graph node if it doesn't exist
			if (!graph[type]) {
				graph[type] = []
				maxEndTime[type] = -Infinity
			}

			// Update maximum end time for the current task type
			maxEndTime[type] = Math.max(maxEndTime[type], maxEndTime[type] + duration)

			// Check for dependencies between tasks
			if (j > 0) {
				const prevTask = schedule[j - 1]
				const prevTaskType = prevTask.type

				// Add an edge from the previous task type to the current task type
				graph[prevTaskType].push(type)
			}
		}
	}

	// Perform depth-first search to determine the parallelized order
	const visited = {}
	const order = []

	function dfs(type) {
		visited[type] = true

		// Visit all dependencies first
		for (const dependency of graph[type]) {
			if (!visited[dependency]) {
				dfs(dependency)
			}
		}

		// Add the current task type to the order
		order.push(type)
	}

	// Visit all task types in the graph
	for (const type in graph) {
		if (!visited[type]) {
			dfs(type)
		}
	}

	// Reverse the order to get the correct parallelized order
	order.reverse()

	// Add delays between tasks if needed
	const result = []
	for (const type of order) {
		const schedule = taskSchedules.find((schedule) =>
			schedule.some((task) => task.type === type)
		)

		if (schedule) {
			const newSchedule = schedule.map((task) => ({ ...task }))
			const delay = maxEndTime[type] - schedule[schedule.length - 1].duration

			if (delay > 0) {
				newSchedule.push({ type: 'Delay', duration: delay })
			}

			result.push(newSchedule)
		}
	}

	return result
}

const taskSchedules = [
	[
		{ type: 'A', duration: 5 },
		{ type: 'B', duration: 3 },
		{ type: 'C', duration: 4 },
	],
	[
		{ type: 'B', duration: 2 },
		{ type: 'D', duration: 6 },
	],
	[
		{ type: 'C', duration: 3 },
		{ type: 'E', duration: 4 },
	],
	[
		{ type: 'A', duration: 4 },
		{ type: 'D', duration: 2 },
	],
]

const parallelizedSchedules = parallelizeTaskSchedules(taskSchedules)
console.log(parallelizedSchedules)
