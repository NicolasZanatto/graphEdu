import { ISimulacao, ISimulacaoAction } from "../types/simulacaoTypes";

const INICIAL_STATE: ISimulacao = {
    dfs: {
        caminho: []
    },
    bfs: {
        caminho: []
    },
    dijkstra: {
        caminho: []
    },
    bellmanford: {
        caminho: []
    },
    passo: 0,
    qntdPassos: 0,
    tipoAlgoritmo: undefined
};


export default function simulacao(oldState = INICIAL_STATE, action: ISimulacaoAction) {
    let dfs = { ...oldState.dfs };
    let bfs = { ...oldState.bfs };
    let dijkstra = { ...oldState.dijkstra };
    let bellmanford = {...oldState.bellmanford}
    switch (action.type) {
        case "UPDATE_DFS":
            dfs.caminho = action.payload.caminho;
            return { ...oldState, dfs };
        case "UPDATE_BFS":
            bfs.caminho = action.payload.caminho;
            return { ...oldState, bfs };
        case "UPDATE_DIJKSTRA":
            dijkstra.caminho = action.payload.caminho;
            return { ...oldState, dijkstra }
        case "UPDATE_BELLMANFORD":
            bellmanford.caminho = action.payload.caminho;
            return {...oldState, bellmanford};
        case "SET_PASSO":
            return { ...oldState, passo: action.payload }
        case "SET_QNTD_PASSOS":
            return { ...oldState, qntdPassos: action.payload }
        case "SET_ALGORITMO":
            console.log("SET_ALGORITMO", action.payload);
            return { ...oldState, tipoAlgoritmo: action.payload }
        default:
            return oldState;
    }
}