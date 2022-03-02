import { SessionState } from "../Store/States/Session.state";

class LocalStorageService {
  public static GetSessions = (): Array<SessionState> => {
    let sessionArray = JSON.parse(localStorage.getItem("Session")!);
    return sessionArray;
  };
  public static DeleteSession = (sessionId: any) => {
    let sessionArray = JSON.parse(localStorage.getItem("Session")!);
    let newArray = sessionArray.filter(
      (session: { id: string | undefined }) => session.id !== sessionId
    );
    localStorage.setItem("Session", JSON.stringify(newArray));
    return newArray;
  };
}
export default LocalStorageService;
