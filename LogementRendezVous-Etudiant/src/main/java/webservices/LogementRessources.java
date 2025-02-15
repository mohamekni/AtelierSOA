package webservices;

import entities.Logement;
import metiers.LogementBusiness;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
@Path("/logement")
public class LogementRessources {
    static LogementBusiness logementBusiness = new LogementBusiness();
    @GET
    @Path("/getAll")
    @Produces(MediaType.APPLICATION_JSON)
    public Response  getAll(){
        return Response.
                status(200).header("Access-Control-Allow-Origin", "*").
                entity(logementBusiness.getLogements()).
                build();
    }
    @POST
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/add")
    public Response addLogement(Logement logement){
        logementBusiness.addLogement(logement);
        return Response
                .status(201)
                .entity("Logement a ete ajoutée")
                .build();
    }
    @DELETE
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/delete/{ref}")
    public Response deleteLogement(@PathParam(value = "ref")int ref ){
        logementBusiness.deleteLogement(ref);
        return Response.status(Response.Status.OK)
                .entity("Logement a été supprimé avec succès")
                .build();
    }
}
