figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'run-test') {
    const selection = figma.currentPage.selection;
    if (selection.length === 0) {
      figma.ui.postMessage({ type: 'error', message: 'Please select a frame to test.' });
      return;
    }

    const frame = selection[0];
    const imageUrl = await frame.exportAsync({
      format: 'PNG',
      constraint: { type: 'SCALE', value: 2 },
    });

    const res = await fetch('http://localhost:3000/api/agents/run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: imageUrl,
        tasks: [
          // TODO: Add tasks based on the Figma design
        ],
      }),
    });

    const results = await res.json();
    figma.ui.postMessage({ type: 'results', results });
  }
};
