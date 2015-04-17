import play.api.{Application, GlobalSettings}
import play.api.libs.concurrent.Execution.Implicits.defaultContext

object Global extends GlobalSettings {
  override def onStart(app: Application): Unit = {
    
  }
}