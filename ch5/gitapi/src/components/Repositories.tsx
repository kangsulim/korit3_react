import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Repositories() {
  const getRepositories = async () => {
    const response = await axios.get('https://api.github.com/search/repositories?q=korit_3');

    return response.data.items;
  }

  const {isLoading, isError, data} = useQuery({
    queryKey: ['repositories'],
    queryFn: getRepositories
  })

  
  if (isLoading) {
    return <h1>데이터를 불러오는 중입니다</h1>
  }

  if (isError) {
    return <h1>데이터를 불러오는 데 실패했습니다</h1>
  }

  else {
    return(
      <table>
        <tbody>
          {
            data.map(repo =>
              <tr key={repo.id}>
                <td>{repo.owner.login} : </td>
                <td>
                  <a href={repo.html_url}>{repo.full_name}</a>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    )
  }
}