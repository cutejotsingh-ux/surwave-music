async function getGenerations() {
    try {
        // Fetch latest 20 generations
        const result = await trickleListObjects('generations', 20, true);
        return result.items.map(item => ({
            id: item.objectId,
            ...item.objectData
        }));
    } catch (error) {
        console.error("Failed to fetch generations:", error);
        return [];
    }
}

async function createGeneration(data) {
    try {
        const result = await trickleCreateObject('generations', data);
        return {
            id: result.objectId,
            ...result.objectData
        };
    } catch (error) {
        console.error("Failed to create generation:", error);
        throw error;
    }
}