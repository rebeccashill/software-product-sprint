package com.google.sps.servlets;

import java.io.IOException;
import java.util.Date;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that responds with song lyrics. */
@WebServlet("/lyrics")
public class LyricsServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html;");
    response.getWriter().println("Unsealed, on a porch a letter sat / Then you said, I wanna leave it again / Once I saw her on a beach of weathered sand / And on the sand I wanna leave her again");
  }
}
