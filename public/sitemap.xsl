<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html>
      <head>
        <title>XML Sitemap | NeuroGen Lab</title>
        <style>
          body { font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; padding: 2rem; }
          table { border-collapse: collapse; width: 100%; margin-top: 1rem; }
          th, td { padding: 0.5rem; text-align: left; border: 1px solid #ddd; }
          th { background: #f5f5f5; }
          tr:hover { background: #f9f9f9; }
          .url { max-width: 400px; overflow: hidden; text-overflow: ellipsis; }
          .languages { font-size: 0.9em; color: #666; }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <p>This is the sitemap for NeuroGen Lab website.</p>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority</th>
            <th>Languages</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td class="url"><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
              <td><xsl:value-of select="sitemap:lastmod"/></td>
              <td><xsl:value-of select="sitemap:changefreq"/></td>
              <td><xsl:value-of select="sitemap:priority"/></td>
              <td class="languages">
                <xsl:for-each select="xhtml:link">
                  <xsl:value-of select="@hreflang"/>
                  <xsl:if test="position() != last()">, </xsl:if>
                </xsl:for-each>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet> 