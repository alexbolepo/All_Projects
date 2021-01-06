<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:json="http://www.ibm.com/xmlns/prod/2009/jsonx" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes" />

    <xsl:template match="/">
        <xsl:element name="json:object">
            <xsl:apply-templates />    
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[*]">
        <xsl:param name="nodeName" select="name()" />
        <xsl:variable name="firstNodeName" select="name(*[1])" />

        <xsl:element name="json:object">
            <xsl:if test="$nodeName">
                <xsl:attribute name="name" select="$nodeName" />
            </xsl:if>
            <xsl:choose>
                <xsl:when test="(count(*) > 1) and (every $x in */name() satisfies $x=$firstNodeName)">
                    <xsl:element name="json:array">
                        <xsl:attribute name="name" select="$firstNodeName" />

                        <xsl:apply-templates >
                            <xsl:with-param name="nodeName" select="''" />
                        </xsl:apply-templates>
                    </xsl:element>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:apply-templates />
                </xsl:otherwise>
            </xsl:choose>
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[not(*)]">
        <xsl:element name="json:string">
            <xsl:attribute name="name">
                <xsl:value-of select="name()" />
            </xsl:attribute>
            <xsl:value-of select="text()" />
        </xsl:element>
    </xsl:template> 
</xsl:stylesheet>