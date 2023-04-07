const compileWithWorker = async (data: any) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./SolcJs.worker.ts', {
            type: 'module',
        });
        worker.postMessage(data);
        worker.onmessage = function (event: any) {
            resolve(event.data);
        };
        worker.onerror = reject;
    });
};