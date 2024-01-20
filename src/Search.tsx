import { useApp } from "./useApp"

export function Search() {
    const {search, setSearch } = useApp(); // Desestruturar o objeto retornado pelo hook

    return (
        <>
            <div>
                <label>Pesquisar</label>
                <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)} // Usar setDev para atualizar o estado
                    name="search"
                    value={search}
                />
            </div>
        </>
    );
}